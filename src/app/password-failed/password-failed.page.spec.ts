import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasswordFailedPage } from './password-failed.page';

describe('PasswordFailedPage', () => {
  let component: PasswordFailedPage;
  let fixture: ComponentFixture<PasswordFailedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordFailedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordFailedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
