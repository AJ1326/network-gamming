import { Component, OnInit, Input } from '@angular/core';
import { GameCompleted } from '@app/@shared/interfaces/gameType/gameCompleted-interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-player-success',
  templateUrl: './addLeadSuccess.component.html',
  styleUrls: ['./addLeadSuccess.component.scss'],
})
export class AddLeadSuccessComponent implements OnInit {
  isLoading = false;
  @Input() title_tag: string;
  @Input() formType: string;
  @Input() gameData: GameCompleted;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    setTimeout(() => {
      this.activeModal.close(true);
    }, 2000);
  }
}
