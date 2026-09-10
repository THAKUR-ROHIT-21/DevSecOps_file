FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && \
    npm cache clean --force && \
    apk upgrade --no-cache

COPY . .

EXPOSE 3000

CMD ["npm", "start"]