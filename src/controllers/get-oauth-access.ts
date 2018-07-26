import { Request, Response } from "express";
import { GetUser } from "../database/src/Action/User/GetUser";
import { ApplicationCore } from "../database/src/Infrastructure/Lib/ApplicationCore";
import * as jwt from "jsonwebtoken";
import { HMACSHA256 } from "crypto-js";
import { base64url } from "base64url";
const bcrypt = require("bcrypt");

export let execute = async (req: Request, res: Response) => {
  const grantType = req.body.grant_type;
  const code = req.body.code;
  const redirectUri = req.body.redirect_uri;
  const clientId = req.body.client_id;

  const appCore = new ApplicationCore();

  if (!clientId || !code || !grantType) {
    res.status(404);
    res.json("Missing Required Body");
    return;
  }

  // get clientID, jwt from DB, check

  // const getUserCommand = new GetUser(null, emailAddress);
  // const getUserResponse = await appCore.dispatchQuery(getUserCommand);
  // console.log("RES", getUserResponse[0]["_password"]);
  // const match = await bcrypt.compare(password, getUserResponse[0]["_password"]);
  // if (match) {
  //   console.log('found a match');

  //   const userJwt = jwt.sign({
  //     data: emailAddress
  //   }, process.env.SECRET, { expiresIn: '1h' });

  //   console.log('your JWT is', userJwt)
  //   return res.json({msg: 'success', jwt: userJwt});
  // }
  return res.json("Incorrect Password");
};
