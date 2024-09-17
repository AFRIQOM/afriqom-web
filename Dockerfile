FROM node:18.15-alpine AS base
WORKDIR /app
COPY . .

ARG VITE_API_URL=http://databoard.afriqom.com/api/index.php
ARG VITE_APP_ENVIRONMENT=production

RUN rm -rvf node_modules
RUN npm install -S
RUN npm run build
CMD npm run serve
