FROM payRateCal:23-alpine

WORKDIR /src
COPY validate.js on payRateCal.js /src/
RUN npm install --production

COPY . /src

EXPOSE 3000

CMD ["npm", "start"]
