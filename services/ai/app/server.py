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
