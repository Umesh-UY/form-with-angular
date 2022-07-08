import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFooterComponent } from './feedback-footer.component';

describe('FeedbackFooterComponent', () => {
  let component: FeedbackFooterComponent;
  let fixture: ComponentFixture<FeedbackFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
