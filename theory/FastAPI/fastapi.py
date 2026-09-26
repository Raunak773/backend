from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI()

templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def show_details(request: Request):
    student_data = {
        "name": "Parampreet Singh Sara",
        "sapid": "590015849",
        "batch": "2024"
    }
    return templates.TemplateResponse(
        "details.html",
        {"request": request, "student": student_data}
    )
