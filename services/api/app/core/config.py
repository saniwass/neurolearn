from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "NeuroLearn"
    app_env: str = "development"
    postgres_db: str = "neurolearn"
    postgres_user: str = "neurolearn"
    postgres_password: str = "neurolearn"
    database_url: str = "postgresql+psycopg://neurolearn:neurolearn@localhost:5432/neurolearn"
    jwt_secret: str = "super-secret-key"
    jwt_algorithm: str = "HS256"
    jwt_expiration_minutes: int = 60 * 24

    class Config:
        env_file = ".env"


settings = Settings()
