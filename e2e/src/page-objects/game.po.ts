/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

import { browser, element, by } from 'protractor';

export class GamePage {
  usernameField = element(by.css('input[formControlName="name"]'));
  firstField = element(by.css('select[formControlName="first"]'));
  secondField = element(by.css('select[formControlName="second"]'));
  submitButton = element(by.css('button[type="addPlayer"]'));

  async submit() {
    await this.usernameField.sendKeys('Network Gamming');
    await this.firstField.sendKeys(1);
    await this.secondField.sendKeys(1);
    await this.submitButton.click();
  }
}
