import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Book } from 'src/app/shared/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public apiUrl = environment.booksApiUrl;

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
  
  public getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  public createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}`, book);
  }

  public updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}`, book);
  }

  public deleteBook(id: number): Observable<{}> {
    return this.http.delete<Book>(`${this.apiUrl}/${id}`);
  }
}
