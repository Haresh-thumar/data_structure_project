import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectThreadComponent } from './subject-thread.component';

describe('SubjectThreadComponent', () => {
  let component: SubjectThreadComponent;
  let fixture: ComponentFixture<SubjectThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectThreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
