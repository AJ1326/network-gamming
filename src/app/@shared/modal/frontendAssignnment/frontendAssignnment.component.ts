import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-frontend-assignnment',
  templateUrl: './frontendAssignnment.component.html',
  styleUrls: ['./frontendAssignnment.component.scss'],
})
export class FrontendAssignnmentComponent implements OnInit {
  @Input() title_tag: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    // setTimeout(() => {
    //   this.activeModal.close(true);
    // }, 2000);
  }
}
