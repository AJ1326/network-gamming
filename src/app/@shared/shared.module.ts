import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderComponent } from './loader/loader.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ConfirmDialogComponent } from './modal/confirmDialog/confirmDialog.component';
import { CustomDialogComponent } from './modal/customDialog/customDialog.component';
import { AddLeadSuccessComponent } from './modal/addLeadSuccess/addLeadSuccess.component';
import { FrontendAssignnmentComponent } from './modal/frontendAssignnment/frontendAssignnment.component';
import { AddPlayerComponent } from './modal/addPlayer/addPlayer.component';
import { SpinnerService } from './spinner/spinner.service';
import { AddPlayerService } from './modal/addPlayer/addPlayer.service';
import { LeaderBoardComponent } from './leaderBoard/leaderBoard.component';
import { ServerErrorComponent } from './serverError/serverError.component';

// PrimeNg
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    ToastModule,
    InputTextModule,
    TranslateModule,
  ],
  declarations: [
    LoaderComponent,
    LeaderBoardComponent,
    ConfirmDialogComponent,
    AddLeadSuccessComponent,
    FrontendAssignnmentComponent,
    CustomDialogComponent,
    SpinnerComponent,
    AddPlayerComponent,
    ServerErrorComponent,
  ],
  exports: [
    LoaderComponent,
    LeaderBoardComponent,
    CustomDialogComponent,
    ConfirmDialogComponent,
    AddPlayerComponent,
    ServerErrorComponent,
    AddLeadSuccessComponent,
    FrontendAssignnmentComponent,
  ],
  providers: [SpinnerService, MessageService, AddPlayerService],
})
export class SharedModule {}
