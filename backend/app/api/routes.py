from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import models, schemas, Entry
from ..database import SessionLocal
import json

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/entry", response_model=schemas.EntryResponse)
def create_entry(entry: schemas.EntryCreate, db: Session = Depends(get_db)):
    db_entry = Entry(
        content=entry.content,
        tags=",".join(entry.tags),
        mood=entry.mood,
        insights="(analysis placeholder)"  # Later: add LLM call here
    )
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry
