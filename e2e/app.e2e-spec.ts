import { PlkrouterPage } from './app.po';

describe('ng-router App', function() {
  let page: PlkrouterPage;

  beforeEach(() => {
    page = new PlkrouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
