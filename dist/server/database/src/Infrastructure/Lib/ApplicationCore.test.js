"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApplicationCore_1 = require("./ApplicationCore");
var typeorm_1 = require("typeorm");
require("reflect-metadata");
var ormconfig_1 = require("../../../../ormconfig");
var connection = new typeorm_1.Connection(ormconfig_1.MysqlConnection.connect());
var app = new ApplicationCore_1.ApplicationCore();
/*

Intentionally commented out. Use 'npm run test' for test/main.ts

*/
describe('ApplicationCore', function () {
    // test('test a command', () => {
    //   const command = new CreateUser('jason@raimondi.us');
    //   console.log(command);
    //   const response = app.dispatchCommand(command);
    //   console.log(response);
    //   expect(response).toBe('jason@raimondi.us');
    // });
    // test('test a query', () => {
    //   const query = new GetUser('jason@raimondi.us');
    //   console.log(query);
    //   const response = app.dispatchQuery(query);
    //     console.log(response);
    //     expect(response).resolves.toBe('jason@raimondi.us');
    // });
});
//# sourceMappingURL=ApplicationCore.test.js.map