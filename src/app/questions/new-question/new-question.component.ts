import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { QuestionsService } from '../questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent {
  roles: string[] = ['Admin', 'User', 'Both'];
  required: string[] = ['Yes', 'No'];
  conditions: string[] = ['Always', 'Rare', 'Medium'];
  mappings: string[] = ['Collaboration', 'Engagement', 'Communication', 'Trust', 'Resources', 'Clarity', 'Management'];
  teamingStages: string[] = ['Norming', 'Forming', 'Performing', 'All'];

  constructor(
    private questionsService: QuestionsService,
    private router: Router) { }

  onCancel() {
    this.router.navigate(['/questions']);
  }

  onCreateQuestion(formData: NgForm) {
    this.questionsService.createQuestion(formData.value).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/questions']);
    });
  }
}
