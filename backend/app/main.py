from fastapi import FastAPI
from . import models
from .database import engine
from .api import routes

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(routes.router, prefix="/api")
