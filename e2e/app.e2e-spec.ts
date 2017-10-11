import { ProjectAuthPage } from './app.po';

describe('project-auth App', () => {
  let page: ProjectAuthPage;

  beforeEach(() => {
    page = new ProjectAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
