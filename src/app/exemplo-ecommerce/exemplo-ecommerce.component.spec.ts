import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploEcommerceComponent } from './exemplo-ecommerce.component';

describe('ExemploEcommerceComponent', () => {
  let component: ExemploEcommerceComponent;
  let fixture: ComponentFixture<ExemploEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploEcommerceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
