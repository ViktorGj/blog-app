import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  allArticlesUrl = 'https://api.webbytechexpert.com/devTest/api.php';
  articleUrl = 'https://api.webbytechexpert.com/devTest/api.php?id=';

  constructor(public http: HttpClient) { }

  // getArticle(id): Observable<Article> {
  //   return this.http.get<Article>(this.articleUrl + id);
  // }

  // getAllArticles(): Observable<Article[]> {
  //   return this.http.get<Article[]>(this.allArticlesUrl);
  // }

  // createArticle(article): Observable<Article> {
  //   return this.http.post<Article>(this.articleUrl, article);
  // }

  // editArticle(id, article): Observable<Article> {
  //   return this.http.put<Article>(this.articleUrl + id, article)
  // }

  // deleteArticle(id) {
  //   return this.http.delete(this.articleUrl);
  // }


  setStorage(articles) {
    localStorage.setItem('blogArticles', JSON.stringify(articles));
  }

  getAllArticles() {
    let articles = JSON.parse(localStorage.getItem('blogArticles'));
    if (!articles || articles.length === 0) {
      localStorage.setItem('blogArticles', JSON.stringify([]));
    }
    return articles
  }


  getArticle(id) {
    let articles = this.getAllArticles();
    return articles.find(a => a.id == id)
  }

  createArticle(article) {
    let articles = this.getAllArticles();
    article.id = '_' + Math.random().toString(36).substr(2, 9);
    articles.push(article);
    this.setStorage(articles);

  }

  editArticle(id, currArticle) {
    let articles = this.getAllArticles();
    let articleIndex = articles.map(a => a.id).indexOf(id);
    articles.splice(articleIndex, 1, {id, ...currArticle});
    this.setStorage(articles);
  }

  deleteArticle(id) {
    let articles = this.getAllArticles();
    let articleIndex = articles.map(a => a.id).indexOf(id);
    articles.splice(articleIndex, 1);
    this.setStorage(articles);
  }

}
