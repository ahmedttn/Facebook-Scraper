import pytest
import json
import sys
sys.path.insert(1, '../docker/fastApi/facebook_page_scraper')
from scraper import Facebook_scraper

@pytest.fixture
def json_exemple():
    f = open('config/data.json')
    
    # returns JSON object as 
    # a dictionary
    return json.load(f)

def test_scraper(json_exemple):
    browser = "chrome"
    headless = True
    meta_ai = Facebook_scraper('OfficialPage.Bestfriend', 1, browser, proxy="IP:PORT", timeout=600, headless=headless)
    json_data = meta_ai.scrap_list_of_json()[0]
    assert json_data['id_post'] == json_exemple['id_post']
    assert json_data['name'] == json_exemple['name']
    assert json_data['shares'] == json_exemple['shares']
    assert json_data['reactions'] == json_exemple['reactions']
    assert json_data['reaction_count'] == json_exemple['reaction_count']
    assert json_data['content'] == json_exemple['content']
    assert json_data['posted_on'] == json_exemple['posted_on']
    assert json_data['video'] == json_exemple['video']
    assert json_data['comments'] == json_exemple['comments']