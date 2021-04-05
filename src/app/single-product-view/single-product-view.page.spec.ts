import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleProductViewPage } from './single-product-view.page';

describe('SingleProductViewPage', () => {
  let component: SingleProductViewPage;
  let fixture: ComponentFixture<SingleProductViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProductViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleProductViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
