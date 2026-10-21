from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.db import get_db
from app.models.user import StudyPlan, User
from app.schemas.profile import StudyPlanOut

router = APIRouter()


@router.get("/")
def get_study_plan(user_id: int, db: Session = Depends(get_db)):
    plans = db.query(StudyPlan).filter(StudyPlan.user_id == user_id).all()
    if not plans:
        sample = [{
            "subject": "Deutsch",
            "duration": 25,
            "task": "Textanalyse und Wiederholung"
        }, {
            "subject": "Französisch",
            "duration": 20,
            "task": "Vokabeln wiederholen"
        }, {
            "subject": "Mathe",
            "duration": 30,
            "task": "Wiederholung und Übungsaufgaben"
        }]
        return {"date": "2026-10-21", "plan": sample}

    return {"date": plans[0].date, "plan": plans[0].plan_json}


@router.post("/")
def create_study_plan(user_id: int, payload: dict, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    plan = StudyPlan(
        user_id=user.id,
        date=payload.get("date", "2026-10-21"),
        plan_json=str(payload.get("plan", [])),
        generated_by_ai=payload.get("generated_by_ai", "system"),
    )
    db.add(plan)
    db.commit()
    db.refresh(plan)
    return {"status": "created", "id": plan.id}
