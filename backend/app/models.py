from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from .database import Base

class Entry(Base):
    __tablename__ = "entries"
    id = Column(Integer, primary_key=True, index=True)
    content = Column(Text)
    tags = Column(String)
    mood = Column(String(10))
    insights = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
