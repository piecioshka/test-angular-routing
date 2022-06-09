import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CoreRoutingModule } from "./core-routing.module";
import { AppComponent } from "./components/app/app.component";
import { PageGalleryComponent } from "./pages/page-gallery/page-gallery.component";
import { PageAuthorsComponent } from "./pages/page-authors/page-authors.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    PageGalleryComponent,
    PageAuthorsComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, CoreRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class CoreModule {}
