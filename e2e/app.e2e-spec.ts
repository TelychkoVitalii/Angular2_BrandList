import { BrandListPage } from './app.po';

describe('brand-list App', function() {
  let page: BrandListPage;

  beforeEach(() => {
    page = new BrandListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
