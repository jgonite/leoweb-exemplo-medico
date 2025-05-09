import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploMedicoComponent } from './exemplo-medico.component';

describe('ExemploMedicoComponent', () => {
  let component: ExemploMedicoComponent;
  let fixture: ComponentFixture<ExemploMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploMedicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
