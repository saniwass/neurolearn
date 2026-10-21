from celery import Celery
import os

redis_url = os.getenv('REDIS_URL', 'redis://localhost:6379/0')

app = Celery('neurolearn_worker', broker=redis_url, backend=redis_url)

@app.task
def process_learning_job(task_name: str):
    return {'status': 'queued', 'task': task_name}
