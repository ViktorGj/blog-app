import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { ActionTypeEnum } from 'src/app/models/action-type.enum';

@Component({
  selector: 'blog-edit-create-article',
  templateUrl: './edit-create-article.component.html'
})
export class EditCreateArticleComponent implements OnInit {

  form: FormGroup;
  action: ActionTypeEnum;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
   this.editCreate();
  }
  
  editCreate() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.editArticle(id);
      this.action = ActionTypeEnum.Update
    } else {
      this.createArticle();
      this.action = ActionTypeEnum.Save
    }
  }

  editArticle(id) {
    const article = this.articlesService.getArticle(id);
    this.populateForm(article);
  }

  createArticle() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
      picture: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]]
    })
  }


  populateForm(article) {
    if (article) {
      this.form = this.fb.group({
        id: [article.id ? article.id : null],
        title: [article.title ? article.title : null],
        picture: [article.picture ? article.picture : null],
        description: [article.description ? article.description : null]
      });
    }
    console.log(this.form)
  }

  submit() {
    const value = this.form.value;
    console.log(value);
    this.saveOrUpdate(value, this.action);
  }

  saveOrUpdate(article, actionType) {
    if (actionType === ActionTypeEnum.Save) {
      this.articlesService.createArticle(article);
    } else {
      this.articlesService.editArticle(article.id, article);
    }
    this.router.navigate(['articles']);
  }

  navigateTo() {
    this.router.navigate(['articles']);
  }

}
