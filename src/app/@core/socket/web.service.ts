import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { GameStatesEnumes } from '@app/@shared/enums/gameStatesEnums';
import { PlayerStatesEnumes } from '@app/@shared/enums/playerStatesEnums';
import { Subject } from 'rxjs/Rx';
import { webSocket } from 'rxjs/webSocket';
import { SocketService } from './socket.service';
const CHAT_URL = 'ws://localhost:8089/subscribe';

interface EventType {
  type?: GameStatesEnumes | PlayerStatesEnumes;
  data?: object | null;
}

@Injectable()
export class WebService {
  public messages: Subject<Message>;

  constructor(socket: SocketService) {
    this.messages = <Subject<Message>>socket.connect(CHAT_URL).map(
      (response): EventType => {
        let data = JSON.parse(response.data);
        return data;
      }
    );
  }
}
