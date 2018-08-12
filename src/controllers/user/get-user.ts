import { Request, Response } from 'express';
import { GetUser } from '../../database/src/Action/User/GetUser';
import { ApplicationCore } from '../../database/src/Infrastructure/Lib/ApplicationCore';
import { BaseController } from '../BaseController';

export class GetUserController extends BaseController {
  constructor(req: Request, res: Response) {
    super();
  }

  public static async execute(req: Request, response: Response) {

    const appCore = new ApplicationCore();
    await super.checkHeaders(req, response, appCore);
    let emailAddress = req.query.email;
  
    if (!emailAddress) {
      response.status(404);
      return response.json('Email Required');
    }

    const getUserCommand = new GetUser(null, emailAddress);
    const getUserResponse = await appCore.dispatchQuery(getUserCommand);
    return response.json(getUserResponse);
  }
}