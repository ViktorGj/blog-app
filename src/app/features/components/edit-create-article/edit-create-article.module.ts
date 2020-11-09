import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCreateArticleRoutingModule } from './edit-create-article-routing.module';
import { EditCreateArticleComponent } from './edit-create-article.component';


@NgModule({
  declarations: [EditCreateArticleComponent],
  imports: [
    CommonModule,
    EditCreateArticleRoutingModule
  ]
})
export class EditCreateArticleModule { }
