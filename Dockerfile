FROM node:6-alpine
WORKDIR /src
COPY . .
RUN npm install --quiet
EXPOSE 8888
CMD npm start
