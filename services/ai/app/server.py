from fastapi import FastAPI

app = FastAPI(title='NeuroLearn AI Service', version='0.1.0')


@app.get('/health')
def health_check():
    return {'status': 'ok', 'service': 'ai'}


@app.get('/plan')
def plan():
    return {
        'title': 'Heutiger Lernplan',
        'subjects': ['Deutsch', 'Französisch', 'Mathe'],
        'strategy': 'Active Recall + Spaced Repetition'
    }


@app.post('/analyze-material')
def analyze_material(payload: dict):
    return {
        'status': 'processed',
        'summary': 'Material erfolgreich analysiert',
        'topics': ['Deutsch', 'Textanalyse', 'Prüfungsvorbereitung'],
        'questions': ['Welche Themen sind besonders wichtig?', 'Was fehlt noch?']
    }


@app.post('/generate-study-plan')
def generate_study_plan(payload: dict):
    return {
        'date': '2026-10-21',
        'plan': [
            {'subject': 'Deutsch', 'duration': 25, 'task': 'Textanalyse'},
            {'subject': 'Französisch', 'duration': 20, 'task': 'Vokabeln'},
            {'subject': 'Mathe', 'duration': 30, 'task': 'Wiederholung'}
        ],
        'strategy': 'Active Recall + Spaced Repetition'
    }


@app.post('/chat-tutor')
def chat_tutor(payload: dict):
    return {
        'reply': 'Lerne mit kurzen Wiederholungsblöcken und aktiver Erinnerung. Heute fokussiere dich auf die 3 wichtigsten Themen.'
    }
import httpx
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.db import get_db
from app.models.user import StudyPlan, User

router = APIRouter()

@router.get("/")
def get_study_plan(user_id: int, db: Session = Depends(get_db)):
    plans = db.query(StudyPlan).filter(StudyPlan.user_id == user_id).all()
    if not plans:
        return {
            "date": "2026-10-21",
            "plan": [
                {"subject": "Deutsch", "duration": 25, "task": "Textanalyse"},
                {"subject": "Französisch", "duration": 20, "task": "Vokabeln"},
                {"subject": "Mathe", "duration": 30, "task": "Wiederholung"},
            ],
        }

    return {
        "date": plans[0].date,
        "plan": eval(plans[0].plan_json) if plans[0].plan_json.startswith("[") else []
    }

@router.post("/generate")
async def generate_study_plan(user_id: int, payload: dict, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    try:
        async with httpx.AsyncClient() as client:
            ai_res = await client.post(
                "http://localhost:8001/generate-study-plan",
                json=payload,
                timeout=30.0,
            )
            ai_res.raise_for_status()
            ai_data = ai_res.json()
    except Exception:
        ai_data = {
            "date": "2026-10-21",
            "plan": [
                {"subject": "Deutsch", "duration": 25, "task": "Textanalyse"},
                {"subject": "Französisch", "duration": 20, "task": "Vokabeln"},
                {"subject": "Mathe", "duration": 30, "task": "Wiederholung"},
            ],
            "strategy": "Active Recall + Spaced Repetition",
        }

    plan = StudyPlan(
        user_id=user.id,
        date=ai_data.get("date", "2026-10-21"),
        plan_json=str(ai_data.get("plan", [])),
        generated_by_ai="ai"
    )

    db.add(plan)
    db.commit()
    db.refresh(plan)

    return {
        "id": plan.id,
        "date": plan.date,
        "plan": ai_data.get("plan", []),
        "strategy": ai_data.get("strategy", "")
    }