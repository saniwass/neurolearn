from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.core.db import get_db
from app.core.security import hash_password, verify_password, create_access_token
from app.models.user import User

router = APIRouter()


@router.post("/register")
def register_user(payload: dict, db: Session = Depends(get_db)):
    email = payload.get("email")
    password = payload.get("password")
    name = payload.get("name")

    if not email or not password or not name:
        raise HTTPException(status_code=400, detail="Missing required fields")

    existing = db.query(User).filter(User.email == email).first()
    if existing:
        raise HTTPException(status_code=400, detail="User already exists")

    user = User(
        email=email,
        name=name,
        password_hash=hash_password(password),
        school_level=payload.get("school_level", "gymnasium"),
        university_level=payload.get("university_level", ""),
        region=payload.get("region", ""),
        preferred_language=payload.get("preferred_language", "de"),
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return {"id": user.id, "email": user.email, "name": user.name}


@router.post("/login")
def login_user(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == form_data.username).first()
    if not user or not verify_password(form_data.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token(subject=str(user.id))
    return {"access_token": token, "token_type": "bearer", "user": {"id": user.id, "email": user.email, "name": user.name}}
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.db import get_db
from app.core.security import hash_password
from app.models.user import User

router = APIRouter()

@router.post("/register")
def register_user(payload: dict, db: Session = Depends(get_db)):
    email = payload.get("email")
    password = payload.get("password")
    name = payload.get("name")

    if not email or not password or not name:
        raise HTTPException(status_code=400, detail="Missing required fields")

    existing = db.query(User).filter(User.email == email).first()
    if existing:
        raise HTTPException(status_code=400, detail="User already exists")

    user = User(
        email=email,
        name=name,
        password_hash=hash_password(password),
        school_level=payload.get("school_level", "gymnasium"),
        university_level=payload.get("university_level", ""),
        region=payload.get("region", ""),
        preferred_language=payload.get("preferred_language", "de"),
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return {
        "id": user.id,
        "email": user.email,
        "name": user.name
    }
    from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.core.db import get_db
from app.core.security import verify_password, create_access_token
from app.models.user import User

router = APIRouter()

@router.post("/login")
def login_user(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == form_data.username).first()

    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    if not verify_password(form_data.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token(subject=str(user.id))

    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "email": user.email,
            "name": user.name
        }
    }