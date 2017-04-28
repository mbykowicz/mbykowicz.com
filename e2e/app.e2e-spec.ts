import { Mbykowicz.ComPage } from './app.po';

describe('mbykowicz.com App', () => {
  let page: Mbykowicz.ComPage;

  beforeEach(() => {
    page = new Mbykowicz.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
