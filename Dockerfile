# Build stage
FROM node:14-alpine as build-stage
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Production stage
FROM node:14-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/build .
COPY entrypoint.sh .

RUN chmod +x entrypoint.sh && npm install -g http-server

EXPOSE 80
CMD ["/app/entrypoint.sh"]
