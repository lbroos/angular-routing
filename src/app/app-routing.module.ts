import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CustomPreloadingStrategy } from './shared/preloading-strategy/custom-preloading-strategy';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'books', 
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule),
    data: { preload: true }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategy
  })],
  exports: [RouterModule],
  providers: [ CustomPreloadingStrategy ]
})
export class AppRoutingModule { }
