from pydantic import BaseModel


class ProfileOut(BaseModel):
    id: int
    user_id: int
    learning_style: str
    strengths: str
    weaknesses: str
    focus_window: str
    motivation_profile: str
    preferred_study_time: str

    class Config:
        orm_mode = True


class SubjectCreate(BaseModel):
    name: str
    level: str | None = None
    mastery_level: int = 0


class SubjectOut(BaseModel):
    id: int
    user_id: int
    name: str
    level: str
    mastery_level: int

    class Config:
        orm_mode = True


class StudyPlanCreate(BaseModel):
    date: str
    plan_json: str
    generated_by_ai: str = "system"


class StudyPlanOut(BaseModel):
    id: int
    user_id: int
    date: str
    plan_json: str
    generated_by_ai: str

    class Config:
        orm_mode = True
