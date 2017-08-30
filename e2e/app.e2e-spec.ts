import { AtrixCommunityPage } from './app.po';

describe('atrix-community App', () => {
  let page: AtrixCommunityPage;

  beforeEach(() => {
    page = new AtrixCommunityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
