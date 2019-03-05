import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PageGalleryComponent } from './components/page-gallery/page-gallery.component';
import { PageAuthorsComponent } from './components/page-authors/page-authors.component';

@NgModule({
  declarations: [
    AppComponent,
    PageGalleryComponent,
    PageAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
