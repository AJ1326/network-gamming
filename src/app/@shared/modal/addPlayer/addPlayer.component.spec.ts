import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '@core';
import { I18nModule } from '@app/i18n';
import { AddPlayerComponent } from './addPlayer.component';
import { LoaderComponent } from '@app/@shared';
import { SpinnerComponent } from '@app/@shared/spinner/spinner.component';
import { ToastModule } from 'primeng/toast';
import { AddLeadSuccessComponent } from '../addLeadSuccess/addLeadSuccess.component';

describe('AddPlayerComponent', () => {
  let component: AddPlayerComponent;
  let fixture: ComponentFixture<AddPlayerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          NgbModule,
          RouterTestingModule,
          TranslateModule.forRoot(),
          I18nModule,
          ToastModule,
          ReactiveFormsModule,
          CoreModule,
        ],
        declarations: [
          AddPlayerComponent,
          LoaderComponent,
          AddLeadSuccessComponent,
          SpinnerComponent,
          AddPlayerComponent,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayerComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should have a default name', () => {
    expect(component.title_tag).toBe('Fill below to get started');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.addPlayerForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let name = component.addPlayerForm.controls['name'];
    expect(name.valid).toBeFalsy();
    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();
  });

  it('first field validity', () => {
    let name = component.addPlayerForm.controls['first'];
    expect(name.valid).toBeFalsy();
    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();
  });

  it('second field validity', () => {
    let name = component.addPlayerForm.controls['second'];
    expect(name.valid).toBeFalsy();
    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();
  });
});
