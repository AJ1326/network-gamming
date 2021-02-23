import { browser, ExpectedConditions as until } from 'protractor';
import { GamePage } from './page-objects/game.po';
import { AppSharedPage } from './page-objects/app-shared.po';

describe('when the app loads', () => {
  const game = new GamePage();
  const app = new AppSharedPage();

  beforeAll(async () => {
    await app.navigateAndSetLanguage();
  });

  it('should display the game page', async () => {
    expect(await browser.getCurrentUrl()).toContain('/game');
  });

  describe('and the user register in for game', () => {
    beforeAll(async () => {
      await game.submit();
    });
  });
});
