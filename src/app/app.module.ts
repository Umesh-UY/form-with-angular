import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackHeaderComponent } from './my-component/feedback-header/feedback-header.component';
import { FeedbackFormComponent } from './my-component/feedback-form/feedback-form.component';
import { FeedbackStarsComponent } from './my-component/feedback-stars/feedback-stars.component';
import { FeedbackFooterComponent } from './my-component/feedback-footer/feedback-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackHeaderComponent,
    FeedbackFormComponent,
    FeedbackStarsComponent,
    FeedbackFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
