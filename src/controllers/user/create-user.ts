import { Request, Response } from 'express';
import { GetUser } from '../../database/src/Action/User/GetUser';
import { ApplicationCore } from '../../database/src/Infrastructure/Lib/ApplicationCore';
import { CreateUser } from '../../database/src/Action/User/CreateUser';
import { GetOauthAccessToken } from '../../database/src/Action/Oauth/GetOauthAccessToken';
import { BaseController } from '../BaseController';
const bcrypt = require('bcrypt');

export class CreateUserController extends BaseController {
  constructor(req: Request, res: Response) {
    super();
  }

  public static async execute(req: Request, response: Response) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let emailAddress = req.body.email;
    let password = req.body.password;
    const appCore = new ApplicationCore();

    await super.checkHeaders(req, response, appCore);

    if (!emailAddress) {
      response.status(404);
      return response.json('Missing email');
    }

    if (!password) {
      response.status(404);
      return response.json('Missing password');
    }

    const hash = await bcrypt.hash(password, 16.5);
    const createUserCommand = new CreateUser(
      firstName,
      lastName,
      emailAddress,
      hash
    );
    const createUserResponse = await appCore.dispatchQuery(createUserCommand);
    return response.json(createUserResponse);
  }
}
