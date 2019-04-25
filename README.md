# node-typescript-app

# Introduction

This project is a POC of backend side of a web application. The project is set up with use-case-controller architecture and it is entirely decoupled from Front-End side of the application. 

For now, the project can be deployed on the clould (unfortunatelly, I did not have much time to get it running remotelly). 

# Structure

The structure of the project is based on the use-case-controller architecture, where:

* Controllers are supposed to transform data from endpoint into models that can be used by the rest of the projects, and translate models into responses that are agreed with the client services. 

* Use cases hosts the business logic. It is not the role of a use case to validate the structure of the input. The errors thrown by a use case is related to its dependencies and also business logics. Use cases are the only ones supposed to reach repositories for more complex queries (controllers are allowed to access repositories only for simple validation purposes before calling an use case). 

* Repositories are supposed to add an abstraction layer to data access. Use case does not know, for example, if the use repository is accessing the data via http-client, file reading or even through data base queries. 

* Models are objects that are used by all layers of the project. They are not public, and it needs to be translated into the expected structure from client side - even though the structure can be quite the same, there are sensitive data that can be omitted from the response payload. 

* Interfaces are used for typing purposes, to keep human-readability of the code and helping the editor to offer better suggestions during the development process.

# How to run

Clone repository
```
git clone <git_url_repository>

```

Install project dependencies
```
npm i
```

Run project
```
npm run build
```

Run unit tests
```
npm test:coverage
```

## commands history for Dockerization

sudo docker build -t node-app .

sudo docker run -p 3002:3000 -d node-app:lastest

docker logs container_id

 sudo docker stop container_id && sudo docker rm container_id

 AWS CLI 

 aws ecr get-login --no-include-email --region us-east-1
