# Meme Text Service

This service aims to extract the text from the image by performing OCR (Optical Character Recognition). This application uses the below mentioned packages / frameworks.

# Frameworks / Libraries

- Flask
- Pytesseract

# Run locally

- Make sure you have installed docker destop on your machine [https://www.docker.com/products/docker-desktop]
- Run the `docker build -t meme-text-service:latest .` command from within `meme-text-service folder`
- Run `docker run -p 3001:3001 meme-text-service:latest` 
- Navigate to [http://localhost:3001]
