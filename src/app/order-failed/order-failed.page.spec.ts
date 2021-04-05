import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderFailedPage } from './order-failed.page';

describe('OrderFailedPage', () => {
  let component: OrderFailedPage;
  let fixture: ComponentFixture<OrderFailedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFailedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderFailedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
