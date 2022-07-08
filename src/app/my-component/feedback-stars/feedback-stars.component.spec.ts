import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackStarsComponent } from './feedback-stars.component';

describe('FeedbackStarsComponent', () => {
  let component: FeedbackStarsComponent;
  let fixture: ComponentFixture<FeedbackStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
