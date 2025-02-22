FROM node:20-alpine AS development

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN apk add --no-cache curl bash

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN apk add --no-cache curl bash

RUN npm install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
