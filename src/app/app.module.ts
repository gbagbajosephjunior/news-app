import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { VerythingComponent } from './verything/verything.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './news.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    VerythingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
