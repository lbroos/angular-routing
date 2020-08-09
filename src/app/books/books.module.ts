import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookDetailComponent,
    BookEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
