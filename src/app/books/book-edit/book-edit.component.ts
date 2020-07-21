import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book.model';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService) { }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (isNaN(+id) && id === "new") {
        this.book = {
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
        this.authorRequired = true;
        this.pageTitle = "Add book";
      } else {
        this.bookService.getBook(+id)
          .subscribe(book => {
            this.book = book;
            this.book.authors.length !== 0 ? this.authorRequired = false : this.authorRequired = true;
            this.pageTitle = "Edit book";
          });
      }
    })
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

  public saveBook(): void {
    if (this.book.id === 0) {
      this.bookService.createBook(this.book)
        .subscribe({
          next: () => this.router.navigate(['/books']),
          error: err => this.errorMessage = err
        });
    } else {
      this.bookService.updateBook(this.book)
        .subscribe({
          next: () => this.router.navigate(['/books']),
          error: err => this.errorMessage = err
        });
    }
  }
  
  public deleteBook(): void {
    this.bookService.deleteBook(this.book.id)
      .subscribe({
        next: () => this.router.navigate(['/books']),
        error: err => this.errorMessage = err
      });
  }
}
