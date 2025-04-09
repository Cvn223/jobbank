ROM node:23-alpine

WORKDIR /src
COPY validate.json payRateCal.json /src/
RUN npm install --production

COPY . /src

EXPOSE 3000

CMD ["npm", "start"]
