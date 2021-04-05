import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderValidatePage } from './order-validate.page';

describe('OrderValidatePage', () => {
  let component: OrderValidatePage;
  let fixture: ComponentFixture<OrderValidatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderValidatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderValidatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
