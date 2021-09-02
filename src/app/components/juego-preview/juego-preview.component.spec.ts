import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoPreviewComponent } from './juego-preview.component';

describe('JuegoPreviewComponent', () => {
  let component: JuegoPreviewComponent;
  let fixture: ComponentFixture<JuegoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
