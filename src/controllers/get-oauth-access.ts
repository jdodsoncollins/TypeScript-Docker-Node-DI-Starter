import { Request, Response } from "express";
import { ApplicationCore } from "../database/src/Infrastructure/Lib/ApplicationCore";
import * as jwt from "jsonwebtoken";
import { HMACSHA256 } from "crypto-js";
import { base64url } from "base64url";
import { CreateOauthAccessToken } from "../database/src/Action/Oauth/CreateOauthAccessToken";
const bcrypt = require("bcrypt");

export let execute = async (req: Request, res: Response) => {
  const code = req.body.code;
  const redirectUri = req.body.redirect_uri;
  const responseType = req.body.response_type;
  const clientId = req.body.client_id;
  const userId = req.body.user_id;

  const appCore = new ApplicationCore();

  if (!clientId || !code || !responseType) {
    res.status(404);
    res.json("Missing Required Body");
    return;
  }

  // get access token
  const createOAuthAccessToken = new CreateOauthAccessToken(code, null, clientId, userId);
  return res.json({msg: 'success'});
};
