FROM nginx:1.15-alpine

COPY ./dist/out /usr/share/nginx/html
