FROM node:8

EXPOSE 3000
RUN npm install -g create-react-app
VOLUME /code
WORKDIR /code
