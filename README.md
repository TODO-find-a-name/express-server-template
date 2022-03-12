# express-server-template
REST API with:
- Express
- TypeScript
- Swagger
- ESLint
- Docker
- GitHub CD

Original repository article: [Creating a REST API with Express, TypeScript and Swagger](https://medium.com/ms-club-of-sliit/building-rest-api-with-express-js-typescript-and-swagger-387a9c731717)

## Table of contents
- [The idea](#the-idea)
- [On new project creation TODO list](#on-new-project-creation-todo-list)
- [Useful things to know](#useful-things-to-know)
- [Future developments](#future-developments)

## The idea
This template repository will be used to save time while maintaining a decent quality when creating new express servers.  
Ideally, if something useful is added in a project derived from this or a library gets updated, said changes should also be applied here.

## On new project creation TODO list
- Change the project's name, description and version in package.json
- Run `npm install` to install all dependencies
- When installing the dependencies, check if there are any vulnerabilities and fix them (possibly even in the express-server-template repository)
- In the project's main directory, create a `.env` file containing the PORT variable
- Run `npm run dev` to start the server in development mode (with nodemon)
- Test it going to `http://localhost:PORT/docs` and checking if the Swagger UI is working
- Test it going to `http://localhost:PORT/ping` to get `{"message":"hello"}`
- In order to enable CD on new task push, setup 3 secrets in the repository:
  - DOCKERHUB_USERNAME
  - DOCKERHUB_PASSWORD
  - DOCKERHUB_SERVICE_NAME (the project's name)  
  
  With this, it will be created a docker image using the dockerfile; the pushed image will be <DOCKERHUB_USERNAME>/<DOCKERHUB_SERVICE_NAME>:latest and <DOCKERHUB_USERNAME>/<DOCKERHUB_SERVICE_NAME>:<PUSHED_TAG>

## Useful things to know
- The `npm run swagger` is run before the `npm run dev` and the `npm run build` script to generate the Swagger documentation, but when running in dev mode to refresh the Swagger documentation you need to manually run `npm run swagger`
- There are utility functions to safely read environment variables in the `src/utils/env.ts` file

## Future developments
A testing framework should be added, as well as CI for said tests.