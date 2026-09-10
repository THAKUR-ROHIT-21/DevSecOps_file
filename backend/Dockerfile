FROM node:22-alpine AS build

RUN apk update && apk upgrade --no-cache

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .


# ---- Final runtime stage ----
FROM node:22-alpine

RUN apk update && apk upgrade --no-cache && \
    rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx

WORKDIR /app

COPY --from=build /app ./

EXPOSE 3000

CMD ["node", "src/index.js"]