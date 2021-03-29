import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamIsOverDialogComponent } from './exam-is-over-dialog.component';

describe('ExamIsOverDialogComponent', () => {
  let component: ExamIsOverDialogComponent;
  let fixture: ComponentFixture<ExamIsOverDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamIsOverDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamIsOverDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
