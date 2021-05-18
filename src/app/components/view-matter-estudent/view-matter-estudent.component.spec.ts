import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMatterEstudentComponent } from './view-matter-estudent.component';

describe('ViewMatterEstudentComponent', () => {
  let component: ViewMatterEstudentComponent;
  let fixture: ComponentFixture<ViewMatterEstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMatterEstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMatterEstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
