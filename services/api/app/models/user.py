from app.core.db import Base
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from datetime import datetime


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    name = Column(String, nullable=False)
    school_level = Column(String, default="gymnasium")
    university_level = Column(String, default="")
    region = Column(String, default="")
    preferred_language = Column(String, default="de")
    created_at = Column(DateTime, default=datetime.utcnow)

    profile = relationship("LearningProfile", back_populates="user", uselist=False)
    subjects = relationship("Subject", back_populates="user")
    study_plans = relationship("StudyPlan", back_populates="user")


class LearningProfile(Base):
    __tablename__ = "learning_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), unique=True, nullable=False)
    learning_style = Column(String, default="visual")
    strengths = Column(Text, default="")
    weaknesses = Column(Text, default="")
    focus_window = Column(String, default="25")
    motivation_profile = Column(String, default="structured")
    preferred_study_time = Column(String, default="abends")
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="profile")


class Subject(Base):
    __tablename__ = "subjects"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    name = Column(String, nullable=False)
    level = Column(String, default="")
    mastery_level = Column(Integer, default=0)

    user = relationship("User", back_populates="subjects")


class StudyPlan(Base):
    __tablename__ = "study_plans"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    date = Column(String, nullable=False)
    plan_json = Column(Text, nullable=False)
    generated_by_ai = Column(String, default="system")

    user = relationship("User", back_populates="study_plans")
