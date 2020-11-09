import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EditCreateArticleRoutingModule } from './edit-create-article-routing.module';
import { EditCreateArticleComponent } from './edit-create-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditCreateArticleComponent],
  imports: [
    CommonModule,
    EditCreateArticleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
})
export class EditCreateArticleModule { }
