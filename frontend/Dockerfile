FROM node

WORKDIR /usr/app-frontend

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3332

CMD ["npm", "run", "start"]
