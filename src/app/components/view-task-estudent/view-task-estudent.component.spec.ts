import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskEstudentComponent } from './view-task-estudent.component';

describe('ViewTaskEstudentComponent', () => {
  let component: ViewTaskEstudentComponent;
  let fixture: ComponentFixture<ViewTaskEstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTaskEstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskEstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
