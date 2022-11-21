import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../header/header.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  @Input() album!: Album;

  constructor() {}

  ngOnInit(): void {}
}
