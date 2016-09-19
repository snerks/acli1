import { Acli1Page } from './app.po';

describe('acli1 App', function() {
  let page: Acli1Page;

  beforeEach(() => {
    page = new Acli1Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('acli1 works!');
  });
});
