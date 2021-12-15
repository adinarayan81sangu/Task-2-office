import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpgae',
  templateUrl: './loginpgae.component.html',
  styleUrls: ['./loginpgae.component.css']
})
export class LoginpgaeComponent implements OnInit {
  Registration:FormGroup;
  constructor(private fb:FormBuilder,private router:Router) {
    this.Registration=this.fb.group({
      username:["",Validators.required],
      Email:["",Validators.required]
    }
    )
   }

  ngOnInit(): void {
  }
  onSubmit(){
    localStorage.setItem('user',this.Registration.value.username)
   console.log(this.Registration.value.username);
 this.router.navigate(["Quiz"]);

  }
}
