FROM isortegah/nodejs_8_2_1:v1

ADD server/package-lock.json /app/user
ADD server/package.json /app/user
ADD server/app.js /app/user
ADD dist/ /app/user/dist
WORKDIR /app/user
RUN npm install

CMD node app.js