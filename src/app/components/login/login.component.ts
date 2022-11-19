import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() lookUpUser: EventEmitter<Task> = new EventEmitter();

  username!: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.username) {
      alert('Please enter your username');
      return;
    }
  }
}
