import { Request, Response } from 'express';
import { GetUser } from '../../database/src/Action/User/GetUser';
import { ApplicationCore } from '../../database/src/Infrastructure/Lib/ApplicationCore';
import * as jwt from 'jsonwebtoken';
import { HMACSHA256 } from 'crypto-js';
import { base64url } from 'base64url';
const bcrypt = require('bcrypt');


import * as queryString from 'query-string';

interface JWTAccessToken {

}

export let authorize = async (req: Request, res: Response) => {
    // validate against all the required fields (client_id, username, password, redirect_url at MINIMUM)

    const emailAddress = req.body.user;
    const password = req.body.password;

    const appCore = new ApplicationCore();

    if (!emailAddress || !password) {
        res.status(404);
        res.json('Missing Email or Password');
        return;
    }

    const getUserCommand = new GetUser(null, emailAddress);
    const getUserResponse = await appCore.dispatchQuery(getUserCommand);
    const match = await bcrypt.compare(password, getUserResponse['_password']);
    if (!match) {
        res.status(404);
        res.json('Incorrect password');
        return;
    }

    const userJwt = jwt.sign({
        data: emailAddress
    }, process.env.SECRET);


    res.json({token: userJwt});
    console.log(userJwt);
    
    // find the oauth2 client based on the client_id validate the redirect_url is valid and known

    // find the user check the password they entered is correct throw if error

    // token duration is set

    // create access token for user, token identifier is random 80 character string

    // redirect back to the Front End Client

    // res.redirect(301, `${redirect_uri}#access_token=${the80CharacterString}`);
};
