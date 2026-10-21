from fastapi import APIRouter, UploadFile, File, HTTPException

router = APIRouter()

@router.post("/upload")
async def upload_material(file: UploadFile = File(...)):
    if not file.filename:
        raise HTTPException(status_code=400, detail="No file uploaded")

    return {
        "filename": file.filename,
        "status": "uploaded",
        "message": "Material gespeichert und bereit für Analyse"
    }