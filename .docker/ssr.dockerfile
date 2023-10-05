# Nextjs 13 ssr production

FROM node:18-alpine3.17 as BASE
LABEL author="onepercman"

RUN corepack enable
RUN corepack prepare pnpm@8.8.0 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN apk add --no-cache git \
  && pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]
