FROM node:16-alpine3.15 as BASE
LABEL author="onepercman"

RUN corepack enable
RUN corepack prepare pnpm@8.8.0 --activate

WORKDIR /app
