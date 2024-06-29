import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from 'src/components/catalog/catalog.component';
import { ContactsComponent } from 'src/components/contacts/contacts.component';
import { GalleryComponent } from 'src/components/gallery/gallery.component';
import { HomeComponent } from 'src/components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
