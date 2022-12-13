#!/usr/bin/env python3
from selenium.common.exceptions import NoSuchElementException
from scraping_utilities import Scraping_utilities
from driver_utilities import Utilities
import sys
import urllib.request
import re
from dateutil.parser import parse
import dateutil
import datetime
from selenium.webdriver.common.by import By
import logging

logger = logging.getLogger(__name__)
format = logging.Formatter(
    "%(asctime)s - %(name)s - %(levelname)s - %(message)s")
ch = logging.StreamHandler()
ch.setFormatter(format)
logger.addHandler(ch)

class Finder():
    """
    Holds the collections of methods that finds element of the facebook's posts using selenium's webdriver's methods
    """
    @staticmethod
    def __get_status_link(link_list):
        status = ""
        for link in link_list:
            link_value = link.get_attribute("href")
            if "/posts/" in link_value and "/groups/" in link_value:
                status = link
                break
            if "/posts/" in link_value:
                status = link
                break
            if "/videos/pcb" in link_value:
                status = link
                break
            elif "/photos/" in link_value:
                status = link
                break
            if "fbid=" in link_value:
                status = link
                break
            elif "/group/" in link_value:
                status = link
                break
            if "/videos/" in link_value:
                status = link
                break
            elif "/groups/" in link_value:
                status = link
                break
        return status

    @staticmethod
    def __find_status(post):
        """finds URL of the post, then extracts link from that URL and returns it"""
        try:
            link = None
            status_link = None
            #links = post.find_elements(By.CSS_SELECTOR,"a[role='link']")
            link = post.find_element(
                    By.CSS_SELECTOR, 'span > a[aria-label][role="link"]')
            status_link = link.get_attribute('href')
            status = Scraping_utilities._Scraping_utilities__extract_id_from_link(
                    status_link)
        except NoSuchElementException:
            # if element is not found
            status = "NA"

        except Exception as ex:
            logger.exception("Error at find_status method : {}".format(ex))
            status = "NA"

        return (status, status_link, link)

    @staticmethod
    def __find_share(post):
        """finds shares count of the facebook post using selenium's webdriver's method"""
        try:

            elements = post.find_elements(
                    By.CSS_SELECTOR, 'div[role="button"] > span')
            shares = "0"
            for element in elements:
                text = element.text
                if "share" in text:
                    shares = re.findall("\d+", text)[0]
                    break
            return shares
        except NoSuchElementException:
            # if element is not present that means there wasn't any shares
            shares = 0

        except Exception as ex:
            logger.exception("Error at Find Share method : {}".format(ex))
            shares = 0

        return shares

    @staticmethod
    def __find_reactions(post):
        """finds all reaction of the facebook post using selenium's webdriver's method"""
        try:
            # find element that have attribute aria-label as 'See who reacted to this
            reactions_all = post.find_element(
                By.CSS_SELECTOR, '[aria-label="See who reacted to this"]')
        except NoSuchElementException:
            reactions_all = ""
        except Exception as ex:
            logger.exception("Error at find_reactions method : {}".format(ex))
        return reactions_all

    @staticmethod
    def __find_comments(post, driver):
        """finds comments count of the facebook post using selenium's webdriver's method"""
        try:
            Utilities._Utilities__click_see_more_comment(
                            driver, post, 'div[class="x1i10hfl xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1a2a7pz x6s0dn4 xi81zsa x1iyjqo2 xs83m0k xsyo7zv xt0b8zv"]')
            Utilities._Utilities__click_see_more_comment(
                            driver, post, 'div[class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv xzsf02u x1s688f"]')
            Utilities._Utilities__click_see_more_comment(
                            driver, post, 'div[class="x1i10hfl xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1a2a7pz x6s0dn4 xi81zsa x1iyjqo2 xs83m0k xsyo7zv xt0b8zv"]')
            Utilities._Utilities__click_see_more_comment(
                            driver, post, 'div[class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv xzsf02u x1s688f"]')
            elements_post = post.find_element(
                            By.CSS_SELECTOR, 'ul')

            comments = []
            elements  = elements_post.find_elements(By.TAG_NAME, "li")
            for element in elements:
                # print(element.get_attribute('innerHTML'))
                if len(element.find_elements(By.CSS_SELECTOR, 'div[class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xdj266r"]')) > 0:
                    comments.append({"author": element.find_element(By.CSS_SELECTOR, 'span[class="x193iq5w xeuugli x13faqbe x1vvkbs x10flsy6 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1tu3fi x3x7a5m x1nxh6w3 x1sibtaa x1s688f xzsf02u"]').get_attribute("textContent") , 
                    "comment":element.find_element(By.CSS_SELECTOR, 'div[class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xdj266r"]').get_attribute("textContent") })
        
        except NoSuchElementException:
            comments = []
        except Exception as ex:
            logger.exception("Error at find_comments method ++++: {}".format(ex))
            comments = []

        return comments

    @staticmethod
    def __fetch_post_passage(href):

        response = urllib.request.urlopen(href)

        text = response.read().decode('utf-8')

        post_message_div_finder_regex = '<div data-testid="post_message" class=".*?" data-ft=".*?">(.*?)<\/div>'

        post_message = re.search(post_message_div_finder_regex, text)

        replace_html_tags_regex = '<[^<>]+>'
        message = re.sub(replace_html_tags_regex, '', post_message.group(0))

        return message

    @staticmethod
    def __element_exists(element, css_selector):
        try:
            found = element.find_element(By.CSS_SELECTOR, css_selector)
            return True
        except NoSuchElementException:
            return False

    @staticmethod
    def __find_content(post, driver):
        """finds content of the facebook post using selenium's webdriver's method and returns string containing text of the posts"""
        try:
            post_content = post.find_element(
                    By.CSS_SELECTOR, '[data-ad-preview="message"]')
            # if "See More" button exists
            if Finder._Finder__element_exists(post_content, 'div[dir="auto"] > div[role]'):
                element = post_content.find_element(
                        By.CSS_SELECTOR, 'div[dir="auto"] > div[role]')  # grab that element
                if element.get_attribute("target"):
                    content = Finder._Finder__fetch_post_passage(
                            element.get_attribute("href"))
                else:
                    Utilities._Utilities__click_see_more(
                            driver, post_content, 'div[dir="auto"] > div[role]')
                    content = post_content.get_attribute(
                            "textContent")  # extract content out of it
            else:
                    # if it does not have see more, just get the text out of it
                content = post_content.get_attribute("textContent")

        except NoSuchElementException:
            # if [data-testid="post_message"] is not found, it means that post did not had any text,either it is image or video
            content = ""
        except Exception as ex:
            logger.exception("Error at find_content method : {}".format(ex))
            content = ""
        return content

    @staticmethod
    def __find_posted_time(post, link_element):
        """finds posted time of the facebook post using selenium's webdriver's method"""
        try:
            # extract element that looks like <abbr class='_5ptz' data-utime="some unix timestamp"> </abbr>
            #posted_time = post.find_element_by_css_selector("abbr._5ptz").get_attribute("data-utime")

            aria_label_value = link_element.get_attribute("aria-label")
            timestamp = parse(aria_label_value).isoformat() if len(
                    aria_label_value) > 5 else Scraping_utilities._Scraping_utilities__convert_to_iso(aria_label_value)
            return timestamp
        except dateutil.parser._parser.ParserError:
            timestamp = Scraping_utilities._Scraping_utilities__convert_to_iso(
                aria_label_value)
            return timestamp
        except TypeError:
            timestamp = ""
        except Exception as ex:
            logger.exception(
                "Error at find_posted_time method : {}".format(ex))
            timestamp = ""
            return timestamp

    @staticmethod
    def __find_video_url(post):
        """finds video of the facebook post using selenium's webdriver's method"""
        try:
            # if video is found in the post, than create a video URL by concatenating post's id with page_name
            video_element = post.find_elements(By.TAG_NAME, "video")
            srcs = []
            for video in video_element:
              srcs.append(video.get_attribute("src"))
        except NoSuchElementException:
            video = []
            pass
        except Exception as ex:
            video = []
            logger.exception("Error at find_video_url method : {}".format(ex))

        return srcs

    @staticmethod
    def __find_image_url(post):
        """finds all image of the facebook post using selenium's webdriver's method"""
        try:

            images = post.find_elements(
                    By.CSS_SELECTOR, "div > img[referrerpolicy]")
            sources = [image.get_attribute("src") for image in images] if len(
                images) > 0 else []
        except NoSuchElementException:
            sources = []
            pass
        except Exception as ex:
            logger.exception("Error at find_image_url method : {}".format(ex))
            sources = []

        return sources

    @staticmethod
    def __find_all_posts(driver):
        """finds all posts of the facebook page using selenium's webdriver's method"""
        try:
            all_posts = driver.find_elements(
                    By.CSS_SELECTOR, 'div[class="x1yztbdb x1n2onr6 xh8yej3 x1ja2u2z"]')
            return all_posts
        except NoSuchElementException:
            logger.error("Cannot find any posts! Exiting!")
            # if this fails to find posts that means, code cannot move forward, as no post is found
            Utilities.__close_driver(driver)
            sys.exit(1)
        except Exception as ex:
            logger.exception(
                "Error at find_all_posts method : {}".format(ex))
            Utilities.__close_driver(driver)
            sys.exit(1)

    @staticmethod
    def __find_name(driver):
        """finds name of the facebook page using selenium's webdriver's method"""
        try:
            name = driver.find_element(
                    By.TAG_NAME, "strong").get_attribute("textContent")
            return name
        except Exception as ex:
            logger.exception("Error at __find_name method : {}".format(ex))

    @staticmethod
    def __find_reaction(reactions_all):
        try:

            return reactions_all.find_elements(By.TAG_NAME,
                                                   "div")

        except Exception as ex:
            logger.exception("Error at find_reaction : {}".format(ex))
            return ""
