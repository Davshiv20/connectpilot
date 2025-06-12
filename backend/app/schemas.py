from pydantic import BaseModel
from typing import Optional, List

class EntryCreate(BaseModel):
    content: str
    tags: List[str]
    mood: str

class EntryResponse(BaseModel):
    id: int
    content: str
    tags: List[str]
    mood: str
    insights: Optional[str]
    created_at: str

    class Config:
        orm_mode = True
