import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizsharedService } from 'src/SharedServices/quizshared.service';

@Component({
  selector: 'app-quizpage',
  templateUrl: './quizpage.component.html',
  styleUrls: ['./quizpage.component.css']
})
export class QuizpageComponent implements OnInit {
  questions: any = {}
  constructor(private qs: QuizsharedService, private fb: FormBuilder, private router: Router) {

  }
  questionNum: number = 1;
  public Answerall: any = {}
  Length: any
  ngOnInit(): void {


    this.getData();
    this.Lenght();
    //  console.log(this.BindQuestionval);
  }
  getAnswer(value: any, id: any) {
    this.Answerall[id] = value.target.value;
    console.log(this.Answerall);
    // this.AllAnswers.emit(this.Answerall)   
  }
  nexclick() {
    if (this.questionNum >= 1 && this.questionNum < this.Length) {
      this.questionNum = this.questionNum + 1;
      this.getData();
    }
  }
  PreveClick() {
    if (this.questionNum > 1 && this.questionNum != 1) {
      this.questionNum = this.questionNum - 1;
      this.getData();
    }
  }
  getData() {
    this.qs.getQuestions(this.questionNum).subscribe((res) => {
      this.questions = res[0];
      //  console.log(this.questions);
    })
  }
  Lenght() {
    this.qs.getTotaldata().subscribe((res) => {
      // console.log(res.length)
      this.Length = res.length;
      // console.log(this.Length);
    })
  }
  postResult() {
    this.qs.PostUserResult(this.Answerall).subscribe((res) => {
      // console.log(res);
      this.router.navigate(["result/"+res.id])
    })
  }
}
