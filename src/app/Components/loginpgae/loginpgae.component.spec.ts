import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpgaeComponent } from './loginpgae.component';

describe('LoginpgaeComponent', () => {
  let component: LoginpgaeComponent;
  let fixture: ComponentFixture<LoginpgaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpgaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpgaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
