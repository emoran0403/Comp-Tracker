import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /**
   * calls skills and quest services to get player data, then calls storage service to store that data
   */
  lookUpUser(username: string) {
    // call skills service
    // call quest service
    // console log the results to check if  they work
    console.log(`username: ${username}`);
    // bundle results into an object
    // call storage service to store progress object
  }
}
