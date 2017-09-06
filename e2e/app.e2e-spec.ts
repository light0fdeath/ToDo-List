import { ApplPage } from './app.po';

describe('appl App', function() {
  let page: ApplPage;

  beforeEach(() => {
    page = new ApplPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
