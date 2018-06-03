import { Request, Response } from 'express';
import { GetUser } from '../database/src/Action/User/GetUser';
import { ApplicationCore } from '../database/src/Infrastructure/Lib/ApplicationCore';
import { CreateUser } from '../database/src/Action/User/CreateUser';

export let execute = async (req: Request, response: Response) => {
    console.log('CREATE USER', req.body);
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let emailAddress = req.body.email;
    let password = req.body.password;
    const appCore = new ApplicationCore();

    // if (!emailAddress) {
    //     response.status(404);
    //     response.json('Email Not Found [242b]');
    //     return;
    // }

    const createUserCommand = new CreateUser(firstName, lastName, emailAddress, password);
    const createUserResponse = await appCore.dispatchQuery(createUserCommand);
    return response.json(createUserResponse);

};
