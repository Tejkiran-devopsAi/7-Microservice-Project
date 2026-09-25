FROM node:22-alpine
WORKDIR /inventory-service
COPY package*.json ./
RUN npm install
COPY ..
EXPOSE 8083
CMD ["npm","start"]
