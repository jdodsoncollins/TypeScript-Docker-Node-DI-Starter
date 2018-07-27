### TypeScript-Docker-Node-DI-Starter

This is a starter back-end project that incorporates the following
- Node + Express
- TypeScript (for Node)
- Docker deployment
- MySQL docker container
- [TypeORM](https://github.com/typeorm/typeorm) for MySQL interfacing
- Dependency Injection via [TypeDI](https://github.com/typestack/typedi)
- Partial implementation of Oauth (this is a work in progress but does not interfere with base functionality above)

To get started
`npm install`
`cd docker && docker-compose up`

Next, generate a `.env` file, where variables such as `process.env.SECRET` can be pulled from. See `.env.tmpl` for the template.

Then...
`npm run serve:dev`
and it should be up, hosted on `localhost:3000`

And you can try...
`npm run test`

Additionally, you can check the `getUser` endpoint by hitting the URLs such as `/user?id=1234`. `localhost:3000/login` is also set up to be a demo login page that returns a JSON web token and console logs some user data.

By running this project, you understand that...
- It is incomplete, including having some possibly commented-out code, and that you will not judge me for that. It should compile successfully though and demonstrate functionality in the basic features.
- It is structured to serve what it could be one day, not what it is today

Read more on [CQRS](https://martinfowler.com/bliki/CQRS.html)

This project (particularly the CQRS pattern) was kickstarted with lots of help by [Jason Raimondi](https://github.com/jasonraimondi)

