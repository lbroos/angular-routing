import { Component, OnInit } from '@angular/core';
import { RouteInfo } from '../../models/route-info.model';

export const HOME_ROUTE: RouteInfo = { path: '/home', title: 'Home'};
export const BOOKS_ROUTE: RouteInfo = { path: '/books', title: 'Your book list'};
export const NEW_BOOK_ROUTE: RouteInfo = { path: '/books/new/edit', title: 'Add new book'};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public title = 'Book Tracker';
  public menuItems: RouteInfo[];

  constructor() { }

  public ngOnInit(): void {
    this.setMenuItems();
  }

  private setMenuItems(): void {
    this.menuItems = new Array<RouteInfo>();
    this.menuItems.push(HOME_ROUTE);
    this.menuItems.push(BOOKS_ROUTE);
    this.menuItems.push(NEW_BOOK_ROUTE);
  }
}
