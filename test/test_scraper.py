import pytest
import sys
sys.path.insert(1, '/home/sesamm/facebook_page_scraper/docker/fastApi/facebook_page_scraper/')
from scraper import Facebook_scraper

def test_scrap_list_of_json():
    posts_count = 3
    browser = "chrome"
    proxy = "IP:PORT" #if proxy requires authentication then user:password@IP:PORT
    timeout = 600 #600 seconds
    headless = False
    meta_ai = Facebook_scraper('', posts_count, browser, proxy=proxy, timeout=timeout, headless=headless, base_path='test/files/Yuka - Home _ Facebook.html')

    json_data = meta_ai.scrap_list_of_json()
    print(json_data)
test_scrap_list_of_json()