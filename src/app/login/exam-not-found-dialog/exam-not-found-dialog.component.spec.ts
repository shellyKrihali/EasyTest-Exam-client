import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamNotFoundDialogComponent } from './exam-not-found-dialog.component';

describe('ExamNotFoundDialogComponent', () => {
  let component: ExamNotFoundDialogComponent;
  let fixture: ComponentFixture<ExamNotFoundDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamNotFoundDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamNotFoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
