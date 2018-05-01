### TypeScript-Docker-Node-DI-Starter

This is a starter back-end project that incorporates the following
- Node + Express
- TypeScript (for Node)
- Docker deployment
- MySQL docker container
- [TypeORM](https://github.com/typeorm/typeorm) for MySQL interfacing
- Dependency Injection via [TypeDI](https://github.com/typestack/typedi)

To get started
`npm install`
`cd docker && docker-compose up`

Then...
`npm run test`
Additionally, you can check the `getUser` endpoint by hitting the URLs such as `/user?id=1234`

Read more on [CQRS](https://martinfowler.com/bliki/CQRS.html)
This project (particularly the CQRS pattern) was kickstarted with lots of help by [Jason Raimondi](https://github.com/jasonraimondi)

