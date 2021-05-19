import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyLoggedUserDialogComponent } from './already-logged-user-dialog.component';

describe('AlreadyLoggedUserDialogComponent', () => {
  let component: AlreadyLoggedUserDialogComponent;
  let fixture: ComponentFixture<AlreadyLoggedUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlreadyLoggedUserDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyLoggedUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
