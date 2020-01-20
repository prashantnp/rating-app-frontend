import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question.model';
import { Observable } from 'rxjs';
import _ from 'lodash';
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class QuestionsService {
    apiBaseUrl: string = "http://localhost:3000";

    constructor(private http: HttpClient) {}

    getQuestions(): Observable<{questions: Question[]}> {
        return this.http.get<{questions: Question[]}>(`${this.apiBaseUrl}/questions`)
        .pipe(map((res) => {
            return {
                questions: res.questions.map(question => _.mapKeys(question, (v, k) => _.camelCase(k)))
            }
        }));
    }
}