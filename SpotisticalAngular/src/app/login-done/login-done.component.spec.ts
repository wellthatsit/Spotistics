import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDoneComponent } from './login-done.component';

describe('LoginDoneComponent', () => {
  let component: LoginDoneComponent;
  let fixture: ComponentFixture<LoginDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
