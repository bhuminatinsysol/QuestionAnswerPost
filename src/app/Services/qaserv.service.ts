import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QAServService {

  constructor(private http:HttpClient) { }

  getAllQuestions()
  {
    return this.http.get("http://localhost:3000/Questions");
  }
}
