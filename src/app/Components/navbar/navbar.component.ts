import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user=localStorage.getItem('user')
  constructor() { }

  ngOnInit(): void {

// this.user=localStorage.getItem(user)
  }

}
