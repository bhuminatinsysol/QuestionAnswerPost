import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QAServService } from 'src/app/Services/qaserv.service';
import { Quest } from 'src/app/models/QuestionModel';

@Component({
  selector: 'app-question-ans',
  templateUrl: './question-ans.component.html',
  styleUrls: ['./question-ans.component.css']
})
export class QuestionAnsComponent {
  constructor(private qaservice: QAServService){}

  @Input()Question!: Quest;

  QuestionAnsForm = new FormGroup({
    answer: new FormControl(null,Validators.required)
  });

  submitAnswer(ans: String,id:number)
  {

  }
}
