### TypeScript-Docker-Node-DI-Starter

This is a starter back-end project that incorporates the following frameworks and libraries to build a OAuth 2 server
- Node + Express
- TypeScript (for Node)
- Docker deployment
- MySQL docker container
- [Nunjucks](https://github.com/mozilla/nunjucks) for template rendering
- [TypeORM](https://github.com/typeorm/typeorm) for MySQL interfacing
- [TypeDI](https://github.com/typestack/typedi) for dependency injection


#### To get up and running

First, generate a `.env` file, where variables such as `process.env.SECRET` can be pulled from. See `.env.tmpl` for the template.

Then,
`npm install`
`make up`

Finally, `npm run serve:dev` and it should be up, hosted on `localhost:3000`. 

MySQL is on `127.0.0.1:33066` with username `root` and password `root`. Go in there, and you should see a user table as well as OAuth tables.

#### Client example

In the `/client-example` directory, there is a simple React app (created with Create React App + TypeScript) which begins the oauth flow. The MYSQL database content included in the image includes the proper routing for this example app. It is configured to run off localhost in tandem with the node app.

#### Tests

`npm run test` will test the DB connection. More testing is a `todo`


#### Existing endpoints and OAuth functionality

`localhost:3000/oauth/login?client_id=clientIdAddedToClientTable&redirect_uri=redirectAddedToClientTable` is set up to be a demo login page that returns an OAuth token. `client_id` and `redirect_uri` params are required and read off of the matching `OAuthClient` MySQL table columns, so just fill in an entry on that table and pass those values along in the URL

Additionally, you can check the `getUser` endpoint by hitting the URLs such as `/user?email=myEmailThatIAddedToUserTable@domain.com`, or POST a `firstName`, `lastNam`, `email`, and `password` to `users/create`

Currently, password credentials are the only type of OAuth type supported, however it is designed to follow the spec for this implementation


#### Disclaimers and Acknowledgements

By running this project, you understand that...
- It is incomplete, including having some possibly commented-out code, and that you will not judge me for that. It should compile successfully though and demonstrate functionality in the basic features of API delivery and authentication.
- It is structured to serve what it could be one day, not what it is today.

Read more on [CQRS](https://martinfowler.com/bliki/CQRS.html)

This project (particularly the CQRS pattern) was kickstarted with lots of help by [Jason Raimondi](https://github.com/jasonraimondi)

