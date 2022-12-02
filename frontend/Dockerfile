FROM node

WORKDIR /usr/app-fronted

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3332

CMD ["npm", "run", "start"]
