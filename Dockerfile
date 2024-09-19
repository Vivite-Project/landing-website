FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production
COPY . .
RUN yarn run build
RUN yarn global add serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]
