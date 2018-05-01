import { IActionHandler } from './ActionHandler';

export interface IAction {
  getActionHandler(): IActionHandler;
}
