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

    deleteQuestion(id: number): Observable<{questions: Question[]}> {
        return this.http.delete<{questions: Question[]}>(`${this.apiBaseUrl}/questions/${id}`)
        .pipe(map((res) => {
            return {
                questions: res.questions.map(question => _.mapKeys(question, (v, k) => _.camelCase(k)))
            }
        }));
    }

    createQuestion(question: Question) {
        return this.http.post(`${this.apiBaseUrl}/questions`, { question: question });
    }

    updateQuestion(id: number, question: Question) {
        return this.http.patch(`${this.apiBaseUrl}/questions/${id}`, { question: question });
    }

    getQuestion(id: number): Observable<{question: Question}> {
        return this.http.get<{question: Question}>(`${this.apiBaseUrl}/questions/${id}`)
        .pipe(map((res) => {
            return {
                question: _.mapKeys(res.question, (v, k) => _.camelCase(k))
            }
        }))
    }
}