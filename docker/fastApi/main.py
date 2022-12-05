import pymongo
from fastapi import FastAPI
import sys
sys.path.insert(1, './facebook_page_scraper')
from scraper import Facebook_scraper


#instantiate the Facebook_scraper class
app = FastAPI()


@app.get("/")
async def root():
    return {"message": "hello world"}

@app.get("/events/{page_name}")
async def get_page_name(page_name: str):
    
    posts_count = 20
    browser = "chrome"
    proxy = "IP:PORT" #if proxy requires authentication then user:password@IP:PORT
    timeout = 600 #600 seconds
    headless = True
    print(page_name)
    meta_ai = Facebook_scraper(page_name, posts_count, browser, proxy=proxy, timeout=timeout, headless=headless)

    #call the scrap_to_json() method

    json_data = meta_ai.scrap_list_of_json()
    meta_ai.__insert_data(json_data)
 
    return True