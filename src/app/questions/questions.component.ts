import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
  fetchingData: boolean = false;
  page: number = 1;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.fetchingData = true;

    this.questionsService.getQuestions().subscribe((res) => {
      this.fetchingData = false;
      this.questions = res.questions;
    });
  }

  onClickDelete(id: number) {
    this.questionsService.deleteQuestion(id).subscribe((res) => {
      this.questions = res.questions;
    });
  }
}
