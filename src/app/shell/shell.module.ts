import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { I18nModule } from '@app/i18n';
import { ShellComponent } from './gameShell/shell.component';
import { HeaderComponent } from './gameShell/header/header.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, I18nModule, RouterModule],
  declarations: [HeaderComponent, ShellComponent],
})
export class ShellModule {}
