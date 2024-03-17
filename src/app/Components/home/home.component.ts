import { Quest } from './../../models/QuestionModel';
import { Component } from '@angular/core';
import { QAServService } from 'src/app/Services/qaserv.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private qaservice: QAServService){}
  QuestionsList: Quest[] = [];

  fetchQuestions()
  {
    this.qaservice.getAllQuestions().subscribe((questions:any) => this.QuestionsList = questions);
  }
}
