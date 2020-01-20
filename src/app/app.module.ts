import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { HttpClientModule } from '@angular/common/http';
import { NewQuestionComponent } from './questions/new-question/new-question.component';

const routes: Routes = [
  { path: 'questions', component: QuestionsComponent },
  { path: 'questions/new', component: NewQuestionComponent },
  { path: '', redirectTo: 'questions', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    NewQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
