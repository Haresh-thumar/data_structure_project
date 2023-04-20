import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleClickEventComponent } from './single-click-event.component';

describe('SingleClickEventComponent', () => {
  let component: SingleClickEventComponent;
  let fixture: ComponentFixture<SingleClickEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleClickEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleClickEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
