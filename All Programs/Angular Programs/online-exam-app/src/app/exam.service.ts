import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answers } from './answers';
import { Questions } from './questions';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(public http:HttpClient) { }

  loadAllQuestions():Observable<Questions[]> {
    return this.http.get<Questions[]>("./assets/questions.json");
  }

  loadAllAswers():Observable<Answers[]> {
    return this.http.get<Answers[]>("./assets/answers.json");
  }
}
