import { Component, OnInit } from '@angular/core';
import { QuestService } from 'src/app/services/quest.service';
import { SkillService } from 'src/app/services/skill.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  player!: any;
  quests!: any;

  // pass in the services to make them available to the class
  constructor(
    private skillService: SkillService,
    private storageService: StorageService,
    private questService: QuestService
  ) {}

  ngOnInit(): void {}

  /**
   * calls skills and quest services to get player data, then calls storage service to store that data
   */
  lookUpUser(username: string) {
    //* call skills service
    this.skillService
      .getSkills(username)
      .subscribe((res) => (this.player = res));
    //* call quest service
    this.questService
      .getQuests(username)
      .subscribe((res) => (this.quests = res));
    //* console log the results to check if  they work
    console.log(`username: ${username}`);
    console.log(`player: ${this.player}`);
    console.log(`quests: ${this.quests}`);
    //* bundle results into an object
    //* call storage service to store progress object
  }
}
