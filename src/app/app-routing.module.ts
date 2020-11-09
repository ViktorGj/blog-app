import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './features/components/articles/articles.component';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'articles/create',
    loadChildren: () => import('./features/components/edit-create-article/edit-create-article.module').then(m => m.EditCreateArticleModule)
  },
  {
    path: 'articles/:id',
    loadChildren: () => import('./features/components/article-details/article-details.module').then(m => m.ArticleDetailsModule)
  },
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full',
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: '/articles'
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
