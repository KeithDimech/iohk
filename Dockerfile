
FROM mcr.microsoft.com/playwright:v1.48.0-jammy

WORKDIR /app
COPY . /app

RUN npm cache clean --force

RUN npm install
RUN npm install --global playwright

CMD ["npm", "run", "start"]