import { Request, Response } from 'express';
import { GetUser } from '../database/src/Action/User/GetUser';
import { ApplicationCore } from '../database/src/Infrastructure/Lib/ApplicationCore';
import * as getUser from '../controllers/get-user';
import * as createUser from '../controllers/create-user';

export let execute = async (req: Request, response: Response) => {
    const username = req.body.username
    const password = req.body.password

    //validate the request
    if (!username || !password){

        return response.json({res: response, message: "Invalid Credentials", error: '400'});
    }

    const user = await getUser.execute(req, response);
    console.log(user);
    if (!user) {
        // let newUser = await getUser.execute(req, response);
        // console.log(newUser);    
    }

};
