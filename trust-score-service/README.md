# Trust Score Service

This service aims to provide trust score for the given search input. The text from the image is extracted using meme text service which is then used as search input for this service to obtain the trust score. 
This application uses the below mentioned packages / frameworks.

# Frameworks / Libraries

- Express
- Request package

# Run locally

- Make sure you have installed docker destop on your machine [https://www.docker.com/products/docker-desktop]
- Run the `docker build -t trust-score-service:latest -f Dockerfile.dev .` command from within `trust-score-service folder`
- Run `docker run -p 3001:3001 trust-score-service:latest` 
- Navigate to [http://localhost:3002]
