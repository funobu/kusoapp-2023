import io
from typing import Annotated
from rembg import remove
from PIL import Image
from fastapi import FastAPI, UploadFile, Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])



class RemoveCharactorImageResponse(BaseModel):
    image: bytes


@app.post("/")
async def remove_charactor_image_bg(file: UploadFile):
    charactor_file = await file.read()
    charactor_file_image = Image.open(io.BytesIO(charactor_file))

    removed_image = remove(charactor_file_image)
    output = io.BytesIO()
    removed_image.save(output, "PNG")
    output_image_bytes = output.getvalue()

    await file.close()
    return Response(content=output_image_bytes, media_type="image/png")


input_path = 'assets/sample2.jpg'
output_path = 'assets/output_sample2.png'

input = Image.open(input_path)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)