FROM node:latest as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build -- --prod

FROM nginx
COPY --from=builder /usr/src/app/dist/my-cfhn-frontend /usr/share/nginx/html
COPY docker/nginx-spa.conf /etc/nginx/conf.d/default.conf
