import { Component, OnInit } from '@angular/core';
import { ModalService } from '@app/@core/modal/modal.service';
import { GameStatesEnumes } from '../enums/gameStatesEnums';
import { PlayerStatesEnumes } from '../enums/playerStatesEnums';
import { CustomDialogComponent } from '../modal/customDialog/customDialog.component';
import { GameCompleted } from '@app/@shared/interfaces/gameType/gameCompleted-interface';
import Utils from '../../../utilities/utils';
import { MessageService } from 'primeng/api';
import { SpinnerService } from '../spinner/spinner.service';
import { WebService } from '@app/@core/socket/web.service';

interface EventType {
  type?: GameStatesEnumes | PlayerStatesEnumes;
  data?: any;
}

@Component({
  selector: 'app-leader-board',
  templateUrl: './leaderBoard.component.html',
  styleUrls: ['./leaderBoard.component.scss'],
})
export class LeaderBoardComponent implements OnInit {
  public isSocketWorking = false;
  public isSocketStopped = false;
  public gameEvents: EventType;
  public totalPlayersInArena: number;

  constructor(
    private webService: WebService,
    private modalService: ModalService,
    private messageService: MessageService,
    private spinnerService: SpinnerService
  ) {
    webService.messages.subscribe(
      (msg: any) => {
        this.spinnerService.show();
        this.isSocketWorking = true;
        this.takeActionBasedOnEventType(msg);
      },
      (err) => {
        this.closeLoadingStates();
      },
      () => {
        this.closeLoadingStates();
      }
    );
  }

  ngOnInit(): void {}

  public get gameStatesEnumes(): any {
    return GameStatesEnumes;
  }

  public get playerStatesEnumes(): any {
    return PlayerStatesEnumes;
  }

  public takeActionBasedOnEventType(events: EventType): void {
    this.gameEvents = events;
    this.spinnerService.hide();
    switch (events.type) {
      case PlayerStatesEnumes.PLAYER_REGISTERED:
        // If some action is needed
        break;
      case PlayerStatesEnumes.PLAYER_JOINED:
        let playerJoined = {
          severity: 'success',
          summary: 'New player has entered into the arena.',
          detail: this.gameEvents.data[0].name + ' welcome onboard !!!, All the best.',
        };
        if (this.totalPlayersInArena >= 2) {
          this.showDefaultMessageDetails(playerJoined);
        }
        break;
      case PlayerStatesEnumes.PLAYER_LEFT:
        let playerLeft = {
          severity: 'error',
          summary: 'Oops !!, Server is down due to some reason.',
          detail: 'Players have left the game. Stay tuned we will be back soon.',
        };
        this.showDefaultMessageDetails(playerLeft);
        break;
      case PlayerStatesEnumes.PLAYED_ROUND:
        // If some action is needed
        this.totalPlayersInArena = this.gameEvents?.data?.leader_board.length;
        break;
      case GameStatesEnumes.GAME_CREATED:
        // If some action is needed
        break;
      case GameStatesEnumes.GAME_STARTED:
        // If some action is needed
        break;
      case GameStatesEnumes.GAME_COMPLETED:
        this.openSuccessWinnerModal(this.gameEvents);
        break;
      case GameStatesEnumes.GAME_WAITING:
        break;
      case GameStatesEnumes.COUNTDOWN_STARTED:
        // If some action is needed
        break;
      case GameStatesEnumes.COUNTING_DOWN:
        // If some action is needed
        break;
      case GameStatesEnumes.GAME_RESET:
        // If some action is needed
        break;
      default:
        let defaultPayload = {
          severity: 'error',
          summary: 'Something different happened.',
          detail: 'We are looking into it. Stay tuned !!!',
        };
        this.showDefaultMessageDetails(defaultPayload);
        break;
    }
  }

  public showDefaultMessageDetails(data: any): void {
    this.messageService.add({
      severity: data.severity,
      summary: data.summary,
      detail: data.detail,
    });
  }

  public closeLoadingStates(): void {
    this.isSocketWorking = false;
    this.isSocketStopped = true;
    this.spinnerService.hide();
  }

  public checkNullValidator(val: any) {
    return Utils.nullValitor(val);
  }

  public checkIsEmpty(val: object) {
    if (!Utils.isEmpty(val)) {
      return null;
    } else {
      return true;
    }
  }

  public openSuccessWinnerModal(winner: GameCompleted): void {
    this.modalService.custom(CustomDialogComponent, {
      title: 'And the winner is....',
      modalType: 'add-player-success',
      gameData: winner,
    });
  }
}
