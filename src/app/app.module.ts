import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import needed for making http requests inside of our application available to all different services and components and so on that we are creating
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, PageListComponent],
  // import needed for making http requests inside of our application available to all different services and components and so on that we are creating
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
