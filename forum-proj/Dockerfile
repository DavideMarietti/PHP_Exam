
FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build


FROM nginx:latest
COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=build ./dist/forum-proj /usr/share/nginx/html

EXPOSE 80
