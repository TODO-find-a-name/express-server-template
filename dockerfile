FROM node:lts-alpine3.20
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
COPY tsoa.json tsoa.json
RUN npm i
COPY ./src ./src
RUN npm run build
RUN find . -mindepth 1 -maxdepth 1 ! -name 'build' ! -name 'node_modules' -exec rm -rf {} +
CMD node ./build/index.js
