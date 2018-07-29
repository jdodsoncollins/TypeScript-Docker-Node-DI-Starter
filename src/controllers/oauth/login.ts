import { Request, Response } from 'express';
import { GetUser } from '../../database/src/Action/User/GetUser';
import { ApplicationCore } from '../../database/src/Infrastructure/Lib/ApplicationCore';
import * as jwt from 'jsonwebtoken';
import { HMACSHA256 } from 'crypto-js';
import { base64url } from 'base64url';
const bcrypt = require('bcrypt');


import * as queryString from 'query-string';
import { GetOAuthClient } from '../../database/src/Action/Oauth/GetOAuthClient';

export let get = async (req: Request, res: Response) => {
    const errors = [];
    const clientId = req.query.client_id;
    const redirectUri = req.query.redirect_uri;

    if (!clientId) {
        errors.push('client_id is required')
    }

    if (!redirectUri) {
        errors.push('redirect_uri is required')
    }

    if (errors.length > 0) {
        res.status(404);
        return res.json(errors);
    }

    // get the client from the database
    // validate the redirect_uri is valid

    const appCore = new ApplicationCore();

    const getOAuthClientIdCommand = new GetOAuthClient(clientId);
    const getOAuthClientIdResponse = await appCore.dispatchQuery(getOAuthClientIdCommand);

    const getOAuthClientRedirectUriCommand = new GetOAuthClient(null, null, redirectUri);
    const getOAuthCLientRedirectUriResponse = await appCore.dispatchQuery(getOAuthClientRedirectUriCommand);

    console.log(getOAuthClientIdResponse);

    if (!getOAuthClientIdResponse) {
        errors.push('client_id is not found in authorized client list')
    }

    if (!getOAuthCLientRedirectUriResponse) {
        errors.push('redirect_uri is not found in authorized client list')
    }

    if (errors.length > 0) {
        res.status(404);
        return res.json(errors);
    }

    const loginUrl = '/oauth/authorize?' + queryString.stringify({
        redirect_uri: req.query.redirect_uri,
        client_id: req.query.client_id,
        state: req.query.state,
        responseType: req.query.responseType,
    })

    res.render('oauth-login.njk', {
        loginUrl,
    });
};
