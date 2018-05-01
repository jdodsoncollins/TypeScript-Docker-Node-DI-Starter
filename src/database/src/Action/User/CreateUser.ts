import { CreateUserHandler } from '../../ActionHandler/User/CreateUserHandler';
import { IActionHandler } from '../../Infrastructure/Lib/Action/ActionHandler';
import { ICommand } from '../../Infrastructure/Lib/Bus/Command/ICommand';
import { User } from '../../DomainModel/User/User';

export class CreateUser implements ICommand {
  private _user: User | null;

  constructor(private _firstName: string | null, private _lastName: string | null, private _email: string | null = null) {
    this._user = new User();
    if (_firstName) {
      this.setFirstName(_firstName);
    }
    if (_lastName) {
        this.setLastName(_lastName);
    }
    if (_email) {
        this.setEmail(_email);
    }
  }

  get user(): User {
    return this._user;
  }

  private setFirstName(firstName: string) {
      this._user.firstName = firstName;
  }

  private setLastName(lastName: string) {
      this._user.lastName = lastName;
  }

  private setEmail(email: string) {
    this._user.email = email;
  }

  getActionHandler(): IActionHandler {
    return new CreateUserHandler(this);
  }
}
