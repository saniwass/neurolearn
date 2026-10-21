# NeuroLearn

# Root-level development commands

install:
	@echo "Installing dependencies"
	@npm install --prefix apps/web
	@npm install --prefix apps/mobile
	@pip install -r services/api/requirements.txt
	@pip install -r services/worker/requirements.txt
	@pip install -r services/ai/requirements.txt

web:
	@cd apps/web && npm run dev

mobile:
	@cd apps/mobile && npm run start

api:
	@cd services/api && uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

worker:
	@cd services/worker && python -m app.worker

ai:
	@cd services/ai && python -m app.server

compose-up:
	docker compose up -d --build

compose-down:
	docker compose down -v
