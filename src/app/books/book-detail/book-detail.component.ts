import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/shared/models/book.model';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  public book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (isNaN(+id) && id === "new") {
      const book: Book = {
        id: 0,
        title: '',
        authors: [],
        description: '',
        publishDate: new Date(),
        publisher: '',
        startReadingDate: null,
        readDate: null,
        rating: 0
      };
      this.book$ = of(book);
    } else {
      this.book$ = this.bookService.getBook(+id);
    }
  }
}
