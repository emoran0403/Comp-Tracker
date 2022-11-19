import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css'],
})
export class LookupComponent implements OnInit {
  @Output() lookUpUser: EventEmitter<string> = new EventEmitter();

  username!: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    //! uncomment this after testing
    // if (!this.username) {
    //   alert('Please enter your username');
    //   return;
    // }

    // emit the event, and send the username
    this.lookUpUser.emit(this.username);
  }
}
