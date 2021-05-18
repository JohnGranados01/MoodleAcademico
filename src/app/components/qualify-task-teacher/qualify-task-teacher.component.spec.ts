import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifyTaskTeacherComponent } from './qualify-task-teacher.component';

describe('QualifyTaskTeacherComponent', () => {
  let component: QualifyTaskTeacherComponent;
  let fixture: ComponentFixture<QualifyTaskTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualifyTaskTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualifyTaskTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
