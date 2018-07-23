import { Request, Response } from 'express';
import { GetUser } from '../database/src/Action/User/GetUser';
import { ApplicationCore } from '../database/src/Infrastructure/Lib/ApplicationCore';

export let execute = async (req: Request, response: Response) => {
    let id = req.query.id;
    const appCore = new ApplicationCore();

    if (!id) {
        response.status(404);
        response.json('User Not Found [242b]');
        return;
    }

    const getUserCommand = new GetUser(id);
    const getUserResponse = await appCore.dispatchQuery(getUserCommand);
    return response.json(getUserResponse);

};
