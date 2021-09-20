import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardattackComponent } from './keyboardattack.component';

describe('KeyboardattackComponent', () => {
  let component: KeyboardattackComponent;
  let fixture: ComponentFixture<KeyboardattackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardattackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardattackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
