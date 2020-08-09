import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: ':id',
    component: BookDetailComponent,
  },
  {
    path: ':id/edit',
    component: BookEditComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class BooksRoutingModule { }
