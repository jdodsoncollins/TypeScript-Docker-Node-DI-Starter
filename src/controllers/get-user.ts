import { Request, Response } from 'express';
import { GetUser } from '../database/src/Action/User/GetUser';
import { ApplicationCore } from '../database/src/Infrastructure/Lib/ApplicationCore';

export let execute = async (req: Request, response: Response) => {
    let emailAddress = req.query.email;
    const appCore = new ApplicationCore();

    if (!emailAddress) {
        response.status(404);
        response.json('Email Not Found [242b]');
        return;
    }

    const getUserCommand = new GetUser(null, emailAddress);
    const getUserResponse = await appCore.dispatchQuery(getUserCommand);
    console.log(getUserResponse);

};
