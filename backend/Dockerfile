FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev && \
    npm cache clean --force && \
    apk upgrade --no-cache

COPY . .

EXPOSE 3000

CMD ["npm", "start"]