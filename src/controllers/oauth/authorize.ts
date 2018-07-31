import { Request, Response } from 'express';
import { GetUser } from '../../database/src/Action/User/GetUser';
import { ApplicationCore } from '../../database/src/Infrastructure/Lib/ApplicationCore';
import * as randToken from 'rand-token';
import * as bcrypt from 'bcrypt';
import * as moment from 'moment';
import { GetOAuthClient } from '../../database/src/Action/Oauth/GetOAuthClient';
import { CreateOauthAccessToken } from '../../database/src/Action/Oauth/CreateOauthAccessToken';

interface JWTAccessToken {

}

export let authorize = async (req: Request, res: Response) => {
    // validate against all the required fields (client_id, username, password, redirect_url at MINIMUM)

    console.log('REQ BODY', req.body);
    const emailAddress = req.body.user;
    const password = req.body.password;
    const clientId = req.body.client_id;
    const redirectUri = req.body.redirect_uri;
    const appCore = new ApplicationCore();
    const errors: string[] = [];

    if (!emailAddress || !password) {
        res.status(404);
        res.json('Missing Email or Password');
        return;
    }

    // find the user check the password they entered is correct throw if error

    const getUserCommand = new GetUser(null, emailAddress);
    const getUserResponse = await appCore.dispatchQuery(getUserCommand);
    const match = await bcrypt.compare(password, getUserResponse['_password']);
    if (!match) {
        res.status(404);
        res.json('Incorrect password');
        return;
    }

    // find the oauth2 client based on the client_id validate the redirect_url is valid and known

    const getOAuthClientIdCommand = new GetOAuthClient(clientId);
    const getOAuthClientIdResponse = await appCore.dispatchQuery(getOAuthClientIdCommand);

    const getOAuthClientRedirectUriCommand = new GetOAuthClient(null, null, redirectUri);
    const getOAuthCLientRedirectUriResponse = await appCore.dispatchQuery(getOAuthClientRedirectUriCommand);

    if (!getOAuthClientIdResponse) {
        errors.push('client_id is not found in authorized client list')
    }

    if (!getOAuthCLientRedirectUriResponse) {
        errors.push('redirect_uri is not found in authorized client list')
    }

    if (errors.length) {
        res.status(404);
        res.json(errors);
    }

    // create access token for user, token identifier is random 80 character string and token duration is set

    const token = randToken.uid(80);
    const expiresOn = moment().add(24, 'hours').format('YYYY-MM-DD HH:mm:ss');
    const createOauthAccessTokenCommand = new CreateOauthAccessToken(token, expiresOn, clientId, emailAddress);
    const createOauthAccessTokenCommandResponse = await appCore.dispatchCommand(createOauthAccessTokenCommand);
    console.log(createOauthAccessTokenCommandResponse);

    if (!createOauthAccessTokenCommandResponse) {
        errors.push('Your login session could not be created.')
    }

    if (errors.length) {
        res.status(404);
        res.json(errors);
    }

    // redirect back to the Front End Client

    return res.redirect(301, `${redirectUri}#access_token=${token}`);
};
