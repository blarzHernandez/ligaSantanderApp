import { LigaSantanderAppPage } from './app.po';

describe('liga-santander-app App', () => {
  let page: LigaSantanderAppPage;

  beforeEach(() => {
    page = new LigaSantanderAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
