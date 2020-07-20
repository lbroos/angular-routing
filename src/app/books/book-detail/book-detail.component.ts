import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  public book$: Observable<Book>;

  constructor(
    private bookService: BookService) { }

  ngOnInit(): void {
    this.book$ = this.bookService.getBook(1);
  }
}
