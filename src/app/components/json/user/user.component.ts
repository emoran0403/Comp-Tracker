import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../header/header.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() user!: User;

  constructor() {}

  ngOnInit(): void {}

  getRandomYears() {
    const years = Math.floor(Math.random() * 10);

    if (years === 1) {
      return `${years} year`;
    } else {
      return `${years} years`;
    }
  }
}
