import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../header/header.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css', '../../../app.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;

  constructor() {}

  ngOnInit(): void {}

  applyStyle1(completed: boolean) {
    if (completed) {
      return 'style1 complete';
    } else {
      return 'incomplete';
    }
  }
  applyStyle2(completed: boolean) {
    if (completed) {
      return 'complete';
    } else {
      return 'incomplete';
    }
  }

  getProgress(completed: boolean) {
    if (completed) {
      return 100;
    } else {
      return Math.random() * 100;
    }
  }
}
