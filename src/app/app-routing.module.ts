import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageGalleryComponent } from './components/page-gallery/page-gallery.component';
import { PageAuthorsComponent } from './components/page-authors/page-authors.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/gallery',
    pathMatch: 'full'
  },
  {
    path: 'ga',
    pathMatch: 'prefix', // Default: "prefix"
    redirectTo: '/gallery'
  },
  {
    path: 'gallery',
    component: PageGalleryComponent
  },
  {
    path: 'authors',
    component: PageAuthorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
