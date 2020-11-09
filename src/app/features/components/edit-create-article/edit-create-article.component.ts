import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'blog-edit-create-article',
  templateUrl: './edit-create-article.component.html'
})
export class EditCreateArticleComponent implements OnInit {

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
   this.editCreate();
  }

  editCreate() {
    const id = this.route.snapshot.paramMap.get('id');
    id ? this.editArticle(id) : this.createArticle();
  }

  editArticle(id) {
    console.log('Edit: ', id)
  }

  createArticle() {
    console.log('Create new article');
  }

}
