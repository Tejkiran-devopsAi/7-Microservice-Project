
FROM node:22.12.0-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .
RUN rm -rf node_modules/.vite

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]