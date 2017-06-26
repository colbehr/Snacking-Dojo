import { DojofoodPage } from './app.po';

describe('dojofood App', () => {
  let page: DojofoodPage;

  beforeEach(() => {
    page = new DojofoodPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
