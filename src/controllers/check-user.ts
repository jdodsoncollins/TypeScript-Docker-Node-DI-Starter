import { Request, Response } from "express";
import { GetUser } from "../database/src/Action/User/GetUser";
import { ApplicationCore } from "../database/src/Infrastructure/Lib/ApplicationCore";
import * as jwt from "jsonwebtoken";
import { HMACSHA256 } from "crypto-js";
import { base64url } from "base64url";
const bcrypt = require("bcrypt");
const oAuthServer = require("oauth2-server");
const Request = oAuthServer.Request;
const Response = oAuthServer.Response;

export let execute = async (req: Request, res: Response) => {
  const emailAddress = req.body.user;
  const password = req.body.password;
  console.log(emailAddress, password);

  const appCore = new ApplicationCore();

  if (!emailAddress || !password) {
    res.status(404);
    res.json("Missing Email or Password");
    return;
  }

  const getUserCommand = new GetUser(null, emailAddress);
  const getUserResponse = await appCore.dispatchQuery(getUserCommand);
  console.log("RES", getUserResponse[0]["_password"]);
  const match = await bcrypt.compare(password, getUserResponse[0]["_password"]);
  if (match) {
    console.log('found a match');

    const userJwt = jwt.sign({
      data: emailAddress
    }, process.env.SECRET, { expiresIn: '1h' });

    console.log('your JWT is', userJwt);
    // save to auth codes
    // return res.json({msg: 'success', jwt: userJwt});
    return res.redirect(301, '/auth?clientId=test123&code='+ userJwt);
  }
  return res.json("Incorrect Password");
};
