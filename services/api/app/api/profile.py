from typing import Any

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.db import get_db
from app.models.user import LearningProfile, User
from app.schemas.user import ProfileUpdate

router = APIRouter()


@router.get("/")
def get_profile(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    profile = user.profile or LearningProfile(user_id=user.id)
    return {
        "id": profile.id,
        "user_id": user.id,
        "learning_style": profile.learning_style,
        "strengths": profile.strengths,
        "weaknesses": profile.weaknesses,
        "focus_window": profile.focus_window,
        "motivation_profile": profile.motivation_profile,
        "preferred_study_time": profile.preferred_study_time,
    }


@router.put("/")
def update_profile(user_id: int, payload: ProfileUpdate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    profile = user.profile or LearningProfile(user_id=user.id)
    for field, value in payload.dict(exclude_unset=True).items():
        if value is not None:
            setattr(profile, field, value)

    db.add(profile)
    db.commit()
    db.refresh(profile)

    return {
        "status": "updated",
        "profile": {
            "id": profile.id,
            "user_id": user.id,
            "learning_style": profile.learning_style,
            "strengths": profile.strengths,
            "weaknesses": profile.weaknesses,
            "focus_window": profile.focus_window,
            "motivation_profile": profile.motivation_profile,
            "preferred_study_time": profile.preferred_study_time,
        },
    }
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.db import get_db
from app.core.security import get_current_user
from app.models.user import LearningProfile, User
from app.schemas.user import ProfileUpdate

router = APIRouter()

@router.get("/me")
def get_me(
    db: Session = Depends(get_db),
    current_user: int = Depends(get_current_user),
):
    user = db.query(User).filter(User.id == current_user).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return {
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "school_level": user.school_level,
        "region": user.region,
        "preferred_language": user.preferred_language,
    }

@router.get("/")
def get_profile(
    db: Session = Depends(get_db),
    current_user: int = Depends(get_current_user),
):
    user = db.query(User).filter(User.id == current_user).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    profile = user.profile or LearningProfile(user_id=user.id)

    return {
        "id": profile.id,
        "user_id": user.id,
        "learning_style": profile.learning_style,
        "strengths": profile.strengths,
        "weaknesses": profile.weaknesses,
        "focus_window": profile.focus_window,
        "motivation_profile": profile.motivation_profile,
        "preferred_study_time": profile.preferred_study_time,
    }

@router.put("/")
def update_profile(
    payload: ProfileUpdate,
    db: Session = Depends(get_db),
    current_user: int = Depends(get_current_user),
):
    user = db.query(User).filter(User.id == current_user).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    profile = user.profile or LearningProfile(user_id=user.id)

    for field, value in payload.dict(exclude_unset=True).items():
        if value is not None:
            setattr(profile, field, value)

    db.add(profile)
    db.commit()
    db.refresh(profile)

    return {
        "status": "updated",
        "profile": {
            "id": profile.id,
            "user_id": user.id,
            "learning_style": profile.learning_style,
            "strengths": profile.strengths,
            "weaknesses": profile.weaknesses,
            "focus_window": profile.focus_window,
            "motivation_profile": profile.motivation_profile,
            "preferred_study_time": profile.preferred_study_time,
        }
    