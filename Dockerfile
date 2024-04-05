FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
COPY app.js ./
COPY formulario.html ./

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]