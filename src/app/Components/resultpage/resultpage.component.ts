import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizsharedService } from 'src/SharedServices/quizshared.service';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.css']
})
export class ResultpageComponent implements OnInit {
  data: any;
  // mainAns={};
  username=localStorage.getItem('user');
  length:any
  public view: boolean = false;
  count: number = 0;
  userAnswers: any;
  CorrectAnswers: any;
  MainQues:any
  constructor(private rl: QuizsharedService, private rt: ActivatedRoute) { }
  ngOnInit(): void {

    this.rt.params.subscribe((res) => {
      this.rl.getResult(res.id).subscribe((res) => {
        console.log(res);
        this.userAnswers = res;
        console.log("user", this.userAnswers);
        this.rl.answerget().subscribe((res) => {
           console.log(res)
          this.CorrectAnswers = res;
          console.log("correct", this.CorrectAnswers);
          this.rl.getTotaldata().subscribe(res=>{
                   this.MainQues=res;    
                   console.log(this.MainQues);
                   
          })
          this.Calculate()
        })
      })
    })

    this.rl.getTotaldata().subscribe((res)=>{
    this.length=res.length
    })
  }

  Calculate() {
    // for(let )
    // for(let i=1;i<){}
    // this.CorrectAnswers.filter((x:any)=>{
    //         console.log(x)
    // })
    for (let key in this.CorrectAnswers) {
      console.log(this.CorrectAnswers[key])

      if (this.CorrectAnswers[key] == this.userAnswers[key]) {
        console.log(this.userAnswers[key], "dfg")
        this.count++;
      }

    }

  }


}
