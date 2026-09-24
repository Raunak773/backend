from fastapi import FastAPI,Request
from fastapi.templating import Jinja2Templates

app=FastAPI()

templates=Jinja2Templates(directory="templates")

@app.get("/")
async def home(request:Request):
    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context={
            "name":"Parampreet Singh Sara",
            "sapid":"590015849",
            "batch":"5"
        }
    )