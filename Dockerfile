FROM node:latest
MAINTAINER Sergey Popov <wailorman@gmail.com>

RUN mkdir /ibb
ADD ./package.json /ibb/package.json
WORKDIR /ibb
RUN npm install --production
ADD . /ibb

#RUN npm run migrate


EXPOSE 8050 # for our node app
EXPOSE 3306 # for mysql

CMD ["npm", "run", "start"]