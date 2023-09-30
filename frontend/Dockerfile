# VUE PROJECT
FROM node:18.18-alpine as frontend
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app/
WORKDIR /home/node/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# NGINX SERVER
FROM nginx:1.25.2-alpine AS prod-stage
COPY --from=frontend /home/node/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]