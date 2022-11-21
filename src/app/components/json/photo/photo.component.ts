import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../header/header.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  @Input() photo!: Photo;

  constructor() {}

  ngOnInit(): void {}
}
