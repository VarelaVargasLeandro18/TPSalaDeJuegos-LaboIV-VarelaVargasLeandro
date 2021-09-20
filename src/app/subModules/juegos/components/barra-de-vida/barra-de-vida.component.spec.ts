import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeVidaComponent } from './barra-de-vida.component';

describe('BarraDeVidaComponent', () => {
  let component: BarraDeVidaComponent;
  let fixture: ComponentFixture<BarraDeVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDeVidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
