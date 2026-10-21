from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    email: EmailStr
    password: str
    name: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserOut(BaseModel):
    id: int
    email: str
    name: str

    class Config:
        orm_mode = True


class ProfileUpdate(BaseModel):
    learning_style: str | None = None
    strengths: str | None = None
    weaknesses: str | None = None
    focus_window: str | None = None
    motivation_profile: str | None = None
    preferred_study_time: str | None = None
