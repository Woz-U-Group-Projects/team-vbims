import { HomePageInventorySpecialistModule } from './home-page-inventory-specialist.module';

describe('HomePageDefaultModule', () => {
  let homePageInventorySpecialistModule: HomePageInventorySpecialistModule;

  beforeEach(() => {
    homePageInventorySpecialistModule = new HomePageInventorySpecialistModule();
  });

  it('should create an instance', () => {
    expect(homePageInventorySpecialistModule).toBeTruthy();
  });
});
