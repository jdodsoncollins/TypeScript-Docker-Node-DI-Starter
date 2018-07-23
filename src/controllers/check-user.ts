import { Request, Response } from "express";
import { GetUser } from "../database/src/Action/User/GetUser";
import { ApplicationCore } from "../database/src/Infrastructure/Lib/ApplicationCore";
import { OAuthModel } from "../auth/OAuthModel";
import { jwt } from "jsonwebtoken";
import { HMACSHA256 } from "crypto-js";
import { base64url } from "base64url";
const bcrypt = require("bcrypt");
const oAuthServer = require("oauth2-server");
const oAuthModel = new OAuthModel();
const Request = oAuthServer.Request;
const Response = oAuthServer.Response;
const oAuth = new oAuthServer({
  model: oAuthModel
});

export let execute = async (req: Request, response: Response) => {
  const emailAddress = req.body.user;
  const password = req.body.password;
  console.log(emailAddress, password);

  const appCore = new ApplicationCore();

  if (!emailAddress || !password) {
    response.status(404);
    response.json("Missing Email or Password");
    return;
  }

  const getUserCommand = new GetUser(null, emailAddress);
  const getUserResponse = await appCore.dispatchQuery(getUserCommand);
  console.log("RES", getUserResponse[0]["_password"]);
  const match = await bcrypt.compare(password, getUserResponse[0]["_password"]);
  if (match) {
    console.log(match);
    var request = new Request(req);
    var response = new Response(response);

    return oAuth
      .authorize(request, response)
      .then(function(success) {
        console.log(response.json(success));

        const userJwt = jwt.sign({
          data: emailAddress
        }, process.env.SECRET, { expiresIn: '1h' });

        return response.json({msg: success, jwt: userJwt});
      })
      .catch(function(err) {
        console.log(response.status(err.code || 500).json(err));
        return response.status(err.code || 500).json(err);
      });
    // return response.json(getUserResponse);
  }
  return response.json("Incorrect Password");
};
