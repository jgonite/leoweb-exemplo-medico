import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploMarmorariaComponent } from './exemplo-marmoraria.component';

describe('ExemploMarmorariaComponent', () => {
  let component: ExemploMarmorariaComponent;
  let fixture: ComponentFixture<ExemploMarmorariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploMarmorariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploMarmorariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
