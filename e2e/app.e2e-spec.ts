import { NgFlixPage } from './app.po';

describe('ng-flix App', function() {
  let page: NgFlixPage;

  beforeEach(() => {
    page = new NgFlixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
