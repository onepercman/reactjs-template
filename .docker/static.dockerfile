FROM node:16-alpine3.15 as BASE
LABEL author="onepercman"

RUN corepack enable
RUN corepack prepare pnpm@8.6.3 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN apk add --no-cache git \
    && pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM nginx:alpine

WORKDIR /app

COPY ./.config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=BASE /app/dist /usr/share/nginx/html
