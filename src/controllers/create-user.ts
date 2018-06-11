import { Request, Response } from 'express';
import { GetUser } from '../database/src/Action/User/GetUser';
import { ApplicationCore } from '../database/src/Infrastructure/Lib/ApplicationCore';
import { CreateUser } from '../database/src/Action/User/CreateUser';
const bcrypt = require('bcrypt');

export let execute = async (req: Request, response: Response) => {
    console.log('CREATE USER', req.body);
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let emailAddress = req.body.email;
    let password = req.body.password;
    const appCore = new ApplicationCore();

    if (!emailAddress) {
        response.status(404);
        response.json('Missing email');
        return;
    }

    if (!password) {
        response.status(404);
        response.json('Missing password');
        return;
    }

    const hash = await bcrypt.hash(password, 16.5);
    const createUserCommand = new CreateUser(firstName, lastName, emailAddress, hash);
    const createUserResponse = await appCore.dispatchQuery(createUserCommand);
    return response.json(createUserResponse);
};
