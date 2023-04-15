import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockingUiComponent } from './blocking-ui.component';

describe('BlockingUiComponent', () => {
  let component: BlockingUiComponent;
  let fixture: ComponentFixture<BlockingUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockingUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockingUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
