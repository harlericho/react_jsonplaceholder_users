FROM node:16-slim
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm i
EXPOSE 3000
CMD ["npm","run","start"]