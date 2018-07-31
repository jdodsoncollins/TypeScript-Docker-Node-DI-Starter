import { Request, Response } from 'express';
import { GetUser } from '../../database/src/Action/User/GetUser';
import { ApplicationCore } from '../../database/src/Infrastructure/Lib/ApplicationCore';
import * as bcrypt from 'bcrypt';
import * as queryString from 'query-string';
import { GetOAuthClient } from '../../database/src/Action/Oauth/GetOAuthClient';
import { GetOauthAccessToken } from '../../database/src/Action/Oauth/GetOauthAccessToken';
import { RouteDefinitions } from '../../routing/route-definitions.constant';

export let get = async (req: Request, res: Response) => {
    const errors: string[] = [];
    const token = req.query.token;
    const clientName = req.query.client_name;
    const redirectUri = req.query.redirect_uri;

    if (!token) {
        errors.push('token is required')
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

    const getOAuthTokenCommand = new GetOauthAccessToken(token);
    const getOAuthTokenResponse = await appCore.dispatchQuery(getOAuthTokenCommand);

    if (!getOAuthTokenResponse) {
        errors.push('invalid authentication')
    }

    if (errors.length) {
        res.status(404);
        return res.json(errors);
    }

    const bounceUrl = RouteDefinitions['oauth.redirect'] + `?` + queryString.stringify({
        redirectUri: redirectUri,
        token: token,
    });

    res.render('oauth-confirm.njk', {
        bounceUrl,
        clientName,
    });
};

export let redirect = async (req: Request, res: Response) => {
    const token = req.query.token;
    const redirectUri = req.query.redirectUri;

    const redirectUrl = `${redirectUri}?` + queryString.stringify({
        token: token,
    });

    return res.redirect(301, redirectUrl);
};
