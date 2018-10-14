FROM node:latest as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build -- authentication
RUN npm run build -- dashboard
RUN npm run build -- presence
RUN npm run build -- --prod

FROM nginx
RUN apt-get update && apt-get install -y curl
COPY --from=builder /usr/src/app/dist/my-cfhn-frontend /usr/share/nginx/html
COPY docker/nginx-spa.conf /etc/nginx/conf.d/default.conf
