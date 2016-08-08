import {Injectable} from '@angular/core';
import {Config} from './config.model.ts';

@Injectable()
export class StateService {
	private _message = 'Hello Message';
  superGreeting: string = 'THIS SEEMS KINDA COOL!';
  config: Config = {
    name: 'Whoa!',
    description: 'this data flow is quite interesting'
  }

  getMessage(): string {
    return this._message;
  };

  setMessage(newMessage: string): void {
    this._message = newMessage;
  };
}
