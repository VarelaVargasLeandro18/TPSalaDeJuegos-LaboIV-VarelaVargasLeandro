import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorYmenorComponent } from './mayor-ymenor.component';

describe('MayorYmenorComponent', () => {
  let component: MayorYmenorComponent;
  let fixture: ComponentFixture<MayorYmenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayorYmenorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorYmenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
