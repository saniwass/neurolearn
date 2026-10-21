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
