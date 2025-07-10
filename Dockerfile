FROM node:24

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ENV NODE_ENV development 
# RUN npm run build
EXPOSE 1337
CMD ["npm","run", "develop"]