import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageGalleryComponent } from "./pages/page-gallery/page-gallery.component";
import { PageAuthorsComponent } from "./pages/page-authors/page-authors.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/gallery",
    pathMatch: "full",
  },
  {
    path: "ga",
    pathMatch: "prefix", // Default
    redirectTo: "/gallery",
  },
  {
    path: "gallery",
    component: PageGalleryComponent,
  },
  {
    path: "a",
    pathMatch: "prefix", // Default
    redirectTo: "/authors",
  },
  {
    path: "authors",
    component: PageAuthorsComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
