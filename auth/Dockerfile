FROM node:20-alpine
COPY . .
WORKDIR ./app
RUN npm i yarn
RUN yarn install
CMD ["yarn", "run", "start"]