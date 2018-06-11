import { IActionHandler } from "../../Infrastructure/Lib/Action/ActionHandler";
import { ICommand } from "../../Infrastructure/Lib/Bus/Command/ICommand";
import { Oauth } from "../../DomainModel/Oauth/Oauth";
import { CreateOauthHandler } from "../../ActionHandler/Oauth/CreateOauthHandler";

export class CreateOauth implements ICommand {
  private _oauth: Oauth | null;

  constructor(
    private _firstName: string | null,
    private _lastName: string | null,
    private _email: string | null = null,
    private _password: string | null
  ) {
    this._oauth = new Oauth();
    // if (_firstName) {
    //   this.setFirstName(_firstName);
    // }
    // if (_lastName) {
    //   this.setLastName(_lastName);
    // }
    // if (_email) {
    //   this.setEmail(_email);
    // }
    // if (_password) {
    //   this.setPassword(_password);
    // }
  }

  get oauth(): Oauth {
    return this._oauth;
  }

  // private setFirstName(firstName: string) {
  //     this._oauth.firstName = firstName;
  // }

  // private setLastName(lastName: string) {
  //     this._oauth.lastName = lastName;
  // }

  // private setEmail(email: string) {
  //   this._oauth.email = email;
  // }

  // private setPassword(password: string) {
  //   this._oauth.password = password;
  // }

  getActionHandler(): IActionHandler {
    return new CreateOauthHandler(this);
  }
}
