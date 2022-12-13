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
    
    browser = "chrome"
    timeout = 600 
    headless = True
    meta_ai = Facebook_scraper(page_name, 20, browser, proxy="IP:PORT", timeout=timeout, headless=headless)
    json_data = meta_ai.scrap_list_of_json()
    meta_ai.__insert_data(json_data)
 
    return True