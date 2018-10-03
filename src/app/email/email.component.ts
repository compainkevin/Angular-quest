import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
email = "tintin";
  constructor() { }

  ngOnInit() {
  }

}
