import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Question } from '../question.model';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  question: Question;

  roles: string[] = ['Admin', 'User', 'Both'];
  required: string[] = ['Yes', 'No'];
  conditions: string[] = ['Always', 'Rare', 'Medium'];
  mappings: string[] = ['Collaboration', 'Engagement', 'Communication', 'Trust', 'Resources', 'Clarity', 'Management'];
  teamingStages: string[] = ['Norming', 'Forming', 'Performing', 'All'];

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.questionsService.getQuestion(params.id).subscribe((res) => {
        this.question = res.question;
        console.log(this.question)
      });
    })
  }

  onCancel() {
    this.router.navigate(['/questions']);
  }

  onUpdateQuestion(formData: NgForm) {
    this.questionsService.updateQuestion(this.question.id, formData.value).subscribe((res) => {
      this.router.navigate(['/questions']);
    });
  }
}
