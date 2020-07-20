import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  public book: Book;
  public author: string;
  public authorRequired = true;
  public pageTitle: string = 'Edit book';

  public errorMessage: string = '';

  constructor(
    private bookService: BookService) { }

  public ngOnInit(): void {
    this.bookService.getBook(1)
    .subscribe(book => {
      this.book = book;
      this.book.authors.length !== 0 ? this.authorRequired = false : this.authorRequired = true;
    });
  }

  public addAuthor(): void {
    if (this.author) {
      this.book.authors.push(this.author);
      this.authorRequired = false;
    }
    this.author = null;
  }

  public removeAuthor(author: string): void {
    const index = this.book.authors.indexOf(author);

    if (index >= 0) {
      this.book.authors.splice(index, 1);
      this.book.authors.length !== 0 ? this.authorRequired = false : this.authorRequired = true;
    }
  }

  public onRatingChanged($event: number): void {
    this.book.rating = $event;
  }
}
