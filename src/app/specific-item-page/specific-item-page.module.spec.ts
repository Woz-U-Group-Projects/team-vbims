import { SpecificItemPageModule } from './specific-item-page.module';

describe('SpecificItemPageModule', () => {
  let specificItemPageModule: SpecificItemPageModule;

  beforeEach(() => {
    specificItemPageModule = new SpecificItemPageModule();
  });

  it('should create an instance', () => {
    expect(specificItemPageModule).toBeTruthy();
  });
});
