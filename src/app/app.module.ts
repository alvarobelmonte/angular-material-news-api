import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NewsResultsComponent } from './components/news-results/news-results.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { EverythingPageComponent } from './pages/everything-page/everything-page.component';
import { GeneralSearchFormComponent } from './components/general-search-form/general-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchFormComponent,
    NewsResultsComponent,
    TopPageComponent,
    EverythingPageComponent,
    GeneralSearchFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
