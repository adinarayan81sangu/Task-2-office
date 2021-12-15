import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatepage',
  templateUrl: './calculatepage.component.html',
  styleUrls: ['./calculatepage.component.css']
})
export class CalculatepageComponent implements OnInit {
  min = 4;
  sec = 60;
  timeover = false
  constructor() { }

  timer() {
    if (this.sec == 0) {
      this.sec = 60;
      this.min= this.min-1;
    }
    else {
      this.sec = this.sec-1
    }
    if (this.min == 0 && this.sec == 0) {
      this.timeover = true;
    }
  }
  ngOnInit(): void {




    setInterval(() => {
      this.timer()
    }, 1000);



  }

}
