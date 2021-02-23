import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { CustomDialogComponent } from '@app/@shared/modal/customDialog/customDialog.component';
import { ModalService } from '@app/@core/modal/modal.service';
import { MessageService } from 'primeng/api';
import { SocketService } from '@app/@core/socket/socket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private modalService: ModalService, private messageService: MessageService) {}

  ngOnInit() {
    this.isLoading = true;
  }

  openAddPlayerForm(type: string): void {
    this.modalService.custom(CustomDialogComponent, {
      title: 'Fill below to get started',
      modalType: 'add-player',
    });
  }
}
