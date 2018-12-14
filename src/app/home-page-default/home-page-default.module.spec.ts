import { HomePageDefaultModule } from './home-page-default.module';

describe('HomePageDefaultModule', () => {
  let homePageDefaultModule: HomePageDefaultModule;

  beforeEach(() => {
    homePageDefaultModule = new HomePageDefaultModule();
  });

  it('should create an instance', () => {
    expect(homePageDefaultModule).toBeTruthy();
  });
});
