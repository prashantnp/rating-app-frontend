import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from './question.model';
import { QuestionsService } from './questions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, OnDestroy {
  questions: Question[] = [];
  fetchingData: boolean = false;
  questionsServiceSub: Subscription;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.fetchingData = true;

    this.questionsServiceSub = this.questionsService.getQuestions().subscribe((res) => {
      this.fetchingData = false;
      this.questions = res.questions;
    });
  }

  ngOnDestroy() {
    this.questionsServiceSub.unsubscribe();
  }
}
