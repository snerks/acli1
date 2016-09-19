export class Acli1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('acli1-app h1')).getText();
  }
}
