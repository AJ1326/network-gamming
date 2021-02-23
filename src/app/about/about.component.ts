import { Component, OnInit } from '@angular/core';
import { ModalService } from '@app/@core/modal/modal.service';
import { CustomDialogComponent } from '@app/@shared/modal/customDialog/customDialog.component';
import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;

  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  openProfile(): void {
    let url = 'https://www.abhishekjaimini.xyz/';
    window.open(url, '_blank');
  }

  openFrontEndAssignment(): void {
    this.modalService.custom(CustomDialogComponent, {
      title: 'Frontend Assignment',
      modalType: 'open-assignment',
    });
  }
}
