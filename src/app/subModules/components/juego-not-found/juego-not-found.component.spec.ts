import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoNotFoundComponent } from './juego-not-found.component';

describe('JuegoNotFoundComponent', () => {
  let component: JuegoNotFoundComponent;
  let fixture: ComponentFixture<JuegoNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
