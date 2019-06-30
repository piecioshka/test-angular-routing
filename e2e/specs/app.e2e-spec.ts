import { AppPage } from "../page-objects/app.po";

describe('workspace-project App', () => {
  let page: AppPage = null;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Routing in #Angular');
  });
});
