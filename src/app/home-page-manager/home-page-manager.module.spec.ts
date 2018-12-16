import { HomePageManagerModule } from './home-page-manager.module';

describe('HomePageDefaultModule', () => {
  let homePageManagerModule: HomePageManagerModule;

  beforeEach(() => {
    homePageManagerModule = new HomePageManagerModule();
  });

  it('should create an instance', () => {
    expect(homePageManagerModule).toBeTruthy();
  });
});
