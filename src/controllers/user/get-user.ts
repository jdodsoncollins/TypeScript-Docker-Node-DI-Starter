import { Request, Response } from 'express';
import { GetUser } from '../../database/src/Action/User/GetUser';
import { ApplicationCore } from '../../database/src/Infrastructure/Lib/ApplicationCore';

export let execute = async (req: Request, response: Response) => {
    let emailAddress = req.query.email;
    const appCore = new ApplicationCore();

    if (!emailAddress) {
        response.status(404);
        return response.json('Email Required');;
    }

    const getUserCommand = new GetUser(null, emailAddress);
    const getUserResponse = await appCore.dispatchQuery(getUserCommand);
    return response.json(getUserResponse);

};
