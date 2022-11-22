import { Component, Input, OnInit } from '@angular/core';
import { Commennt } from '../../header/header.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css', '../../../app.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() comment!: Commennt;
  constructor() {}

  ngOnInit(): void {}
}
