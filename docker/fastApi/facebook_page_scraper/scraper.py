#!/usr/bin/env python3
from driver_initialization import Initializer
from driver_utilities import Utilities
from element_finder import Finder
from scraping_utilities import Scraping_utilities
import time
import logging
import pymongo

logger = logging.getLogger(__name__)
format = logging.Formatter(
    "%(asctime)s - %(name)s - %(levelname)s - %(message)s")
ch = logging.StreamHandler()
ch.setFormatter(format)
logger.addHandler(ch)

class Facebook_scraper:


    def __init__(self, page_name, posts_count=10, browser="chrome", proxy=None, timeout=600, headless=True, browser_profile=None, base_path='https://facebook.com/{}'):
        self.page_name = page_name
        self.posts_count = int(posts_count)
        self.URL = base_path.format(self.page_name)
        self.browser = browser
        self.__driver = ''
        self.proxy = proxy
        self.timeout = timeout
        self.headless = headless
        self.browser_profile = browser_profile
        self.__data_dict = []
        self.__extracted_post = set()

    def __start_driver(self):
        """changes the class member __driver value to driver on call"""
        self.__driver = Initializer(
            self.browser, self.proxy, self.headless, self.browser_profile).init()

    def __handle_popup(self):
        # while scrolling, wait for login popup to show, it can be skipped by clicking "Not Now" button
        try:
            Utilities._Utilities__close_modern_layout_signup_modal(
                    self.__driver)
        except Exception as ex:
            logger.exception("Error at handle_popup : {}".format(ex))

    def __check_timeout(self, start_time, current_time):
        return (current_time-start_time) > self.timeout

    def scrap_list_of_json(self):
        # call the __start_driver and override class member __driver to webdriver's instance
        self.__start_driver()
        starting_time = time.time()
        # navigate to URL
        self.__driver.get(self.URL)
        # sometimes we get popup that says "your request couldn't be processed", however
        # posts are loading in background if popup is closed, so call this method in case if it pops up.
        Utilities._Utilities__close_error_popup(self.__driver)
        # wait for post to load
        Utilities._Utilities__wait_for_element_to_appear(
            self.__driver)
        # scroll down to bottom most
        Utilities._Utilities__scroll_down(self.__driver)
        self.__handle_popup()

        name = Finder._Finder__find_name(
            self.__driver) 

        while len(self.__data_dict) <= self.posts_count:
            self.__handle_popup()
            self.__find_elements(name)
            current_time = time.time()
            if self.__check_timeout(starting_time, current_time) is True:
                logger.setLevel(logging.INFO)
                logger.info('Timeout...')
                break
            Utilities._Utilities__scroll_down(
                self.__driver)  # scroll down
        # close the browser window after job is done.
        Utilities._Utilities__close_driver(self.__driver)
        # dict trimming, might happen that we find more posts than it was asked, so just trim it
        self.__data_dict = self.__data_dict[0:int(self.posts_count)]

        return self.__data_dict

    def __remove_duplicates(self, all_posts):
        """takes a list of posts and removes duplicates from it and returns the list"""
        if len(self.__extracted_post) == 0:  # if self.__extracted_post is empty that means it is first extraction
            # if it does than just add all the elements from the lists to __extracted_post set()
            self.__extracted_post.update(all_posts)
            return all_posts  # return the all_posts without any changes as it is first time and no duplicate is present
        else:
            # if self.extracted posts have some element than compare it with all_posts's element and return a new list containing new element
            removed_duplicated = [
                post for post in all_posts if post not in self.__extracted_post]
            # after removing duplicates, add all those new element to extracted_posts, as it
            self.__extracted_post.update(all_posts)
            return removed_duplicated  # is set() it won't have duplicate elements


    def __find_elements(self, name):
        """find elements of posts and add them to data_dict"""
        all_posts = Finder._Finder__find_all_posts(
            self.__driver)  # find all posts
        all_posts = self.__remove_duplicates(
            all_posts)  # remove duplicates from the list
        # iterate over all the posts and find details from the same
        for post in all_posts:
            try:
                # find post ID from post
                status, post_url, link_element = Finder._Finder__find_status(
                    post)
                if post_url is None:
                    continue
                # find share from the post
                shares = Finder._Finder__find_share(post)
                # converting shares to number
                # e.g if 5k than it should be 5000
                shares = int(
                    Scraping_utilities._Scraping_utilities__value_to_float(shares))
                # find all reactions
                reactions_all = Finder._Finder__find_reactions(post)
                # find all anchor tags in reactions_all list
                all_hrefs_in_react = Finder._Finder__find_reaction(reactions_all) if type(
                    reactions_all) != str else ""
                # if hrefs were found
                # all_hrefs contains elements like
                # ["5 comments","54 Likes"] and so on
                if type(all_hrefs_in_react) == list:
                    l = [i.get_attribute("aria-label")
                         for i in all_hrefs_in_react]
                else:
                    l = []
                # extract that aria-label from all_hrefs_in_react list and than extract number from them seperately
                # if Like aria-label is in the list, than extract it and extract numbers from that text

                likes = Scraping_utilities._Scraping_utilities__find_reaction_by_text(
                    l, "Like")

                # if Love aria-label is in the list, than extract it and extract numbers from that text
                loves = Scraping_utilities._Scraping_utilities__find_reaction_by_text(
                    l, "Love")

                # if Wow aria-label is in the list, than extract it and extract numbers from that text
                wow = Scraping_utilities._Scraping_utilities__find_reaction_by_text(
                    l, "Wow")

                # if Care aria-label is in the list, than extract it and extract numbers from that text
                cares = Scraping_utilities._Scraping_utilities__find_reaction_by_text(
                    l, "Care")
                # if Sad aria-label is in the list, than extract it and extract numbers from that text
                sad = Scraping_utilities._Scraping_utilities__find_reaction_by_text(
                    l, "Sad")
                # if Angry aria-label is in the list, than extract it and extract numbers from that text
                angry = Scraping_utilities._Scraping_utilities__find_reaction_by_text(
                    l, "Angry")
                # if Haha aria-label is in the list, than extract it and extract numbers from that text
                haha = Scraping_utilities._Scraping_utilities__find_reaction_by_text(
                    l, "Haha")

                # converting all reactions to numbers
                # e,g reactions may contain counts like "5k","5m", so converting them to actual number
                likes = Scraping_utilities._Scraping_utilities__value_to_float(
                    likes)
                loves = Scraping_utilities._Scraping_utilities__value_to_float(
                    loves)
                wow = Scraping_utilities._Scraping_utilities__value_to_float(
                    wow)
                cares = Scraping_utilities._Scraping_utilities__value_to_float(
                    cares)
                sad = Scraping_utilities._Scraping_utilities__value_to_float(
                    sad)
                angry = Scraping_utilities._Scraping_utilities__value_to_float(
                    angry)
                haha = Scraping_utilities._Scraping_utilities__value_to_float(
                    haha)

                reactions = {"likes": int(likes), "loves": int(loves), "wow": int(wow), "cares": int(cares), "sad": int(sad),
                             "angry":
                             int(angry), "haha": int(haha)}

                # count number of total reactions
                total_reaction_count = Scraping_utilities._Scraping_utilities__count_reaction(
                    reactions)

                comments = Finder._Finder__find_comments(post, self.__driver)

                post_content = Finder._Finder__find_content(
                    post, self.__driver)
                # extract time
                posted_time = Finder._Finder__find_posted_time(
                    post, link_element)

                video = Finder._Finder__find_video_url(post)

                image = Finder._Finder__find_image_url(post)

                #post_url = "https://www.facebook.com/{}/posts/{}".format(self.page_name,status)

                self.__data_dict.append({
                    "id_post": status,
                    "name": name,
                    "shares": shares,
                    "reactions": reactions,
                    "reaction_count": total_reaction_count,
                    "comments": comments,
                    "content": post_content,
                    "posted_on": posted_time,
                    "video": video,
                    "image": image,
                    "post_url": post_url
                })
            except Exception as ex:
                logger.exception(
                    "Error at find_elements method : {}".format(ex))

    def insert_data(self, json_data):
        """insert data in database"""
        client = pymongo.MongoClient("mongodb://mongodb:27017/")
        db = client["facebookdb"]
        fb = db["facebook"] 
        for ele in json_data:
            fb.insert_many([ele])  
