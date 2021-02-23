import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProviderDataValidators as Validators } from '@app/modules/data-valiidator';
import { SpinnerService } from '@app/@shared/spinner/spinner.service';
import { MessageService } from 'primeng/api';
import { AddPlayerService } from './addPlayer.service';
import { NewPlayer } from './interfaces/add-player-interface';

@Component({
  selector: 'app-add-player',
  templateUrl: './addPlayer.component.html',
  styleUrls: ['./addPlayer.component.scss'],
})
export class AddPlayerComponent implements OnInit {
  addPlayerForm: FormGroup;
  submitted = false;
  isLoading = false;
  leadOriginalData: any;
  selectNumberDataList: number[];
  error: string;

  @Input() title_tag: string;
  @Input() formType: string;
  @Input() form_data: [];

  constructor(
    private formBuilder: FormBuilder,
    private addPlayerService: AddPlayerService,
    private messageService: MessageService,
    public activeModal: NgbActiveModal,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.selectNumberDataList = this.addPlayerService.getNumberDataList();
    this.getAddPlayerForm();
  }

  changeNumber(e: any, type: string) {
    this.addPlayerForm.controls[type].setValue(parseInt(e.target.value.split(':')[0]), {
      onlySelf: true,
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.addPlayerForm.controls;
  }

  save() {
    this.submitted = true;
    if (this.addPlayerForm.valid) {
      const newPlayerData = this.addPlayerForm.value;
      this.isLoading = true;
      this.spinnerService.show();
      // calling submit call for new player
      this.submitAddPlayerForm(newPlayerData);
    } else {
      return;
    }
  }

  submitAddPlayerForm(newPlayerData: NewPlayer): void {
    this.addPlayerService.addNewPlayer(newPlayerData).subscribe(
      (data) => {
        this.error = '';
        this.messageService.add({
          severity: data.type.toLowerCase(),
          summary: data.detail,
          detail: 'Hooray!! You are about to get started. ;)',
        });
        this.resetFormLoadingElements();
        this.activeModal.close();
      },
      (error) => {
        this.error = error.error?.detail ? error.error?.detail : error.message;
        this.messageService.add({
          severity: 'error',
          summary: error.error?.title ? error.error.title : 'Connection Issue',
          detail: error.error?.detail ? error.error.detail : error.message,
        });
        this.resetFormLoadingElements();
      }
    );
  }

  resetFormLoadingElements(): void {
    this.isLoading = false;
    this.submitted = false;
    this.spinnerService.hide();
  }

  getAddPlayerForm() {
    this.addPlayerForm = this.formBuilder.group({
      name: ['', [Validators.required()]],
      first: [null, [Validators.required()]],
      second: [null, [Validators.required()]],
    });
  }
}
