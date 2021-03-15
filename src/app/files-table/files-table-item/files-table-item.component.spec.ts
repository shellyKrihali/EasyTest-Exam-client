import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesTableItemComponent } from './files-table-item.component';

describe('FilesTableItemComponent', () => {
  let component: FilesTableItemComponent;
  let fixture: ComponentFixture<FilesTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesTableItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
