import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { NewQuestionComponent } from './questions/new-question/new-question.component';
import { EditQuestionComponent } from './questions/edit-question/edit-question.component';

const routes: Routes = [
  { path: 'questions', component: QuestionsComponent },
  { path: 'questions/new', component: NewQuestionComponent },
  { path: 'questions/:id/edit', component: EditQuestionComponent },
  { path: '', redirectTo: 'questions', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    NewQuestionComponent,
    EditQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
