import { Component, OnInit } from '@angular/core';
import { JsonPlaceHolderService } from 'src/app/services/json-place-holder.service';
import { QuestService } from 'src/app/services/quest.service';
import { SkillService } from 'src/app/services/skill.service';
import { StorageService } from 'src/app/services/storage.service';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export interface Album {
  userId: number;
  id: number;
  title: string;
}
export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface Geo {
  lat: string;
  lng: string;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export type JsonPlaceHolderResources =
  | 'posts'
  | 'comments'
  | 'albums'
  | 'photos'
  | 'todos'
  | 'users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  player!: any;
  quests!: any;

  // for json angular practice
  // app-button component iterates over this list, generating a button for each
  resources: JsonPlaceHolderResources[] = [
    'posts',
    'comments',
    'albums',
    'photos',
    'todos',
    'users',
  ];
  // for json angular practice
  posts: Post[] = [];
  comments: Comment[] = [];
  albums: Album[] = [];
  photos: Photo[] = [];
  todos: Todo[] = [];
  users: User[] = [];

  // pass in the services to make them available to the class
  constructor(
    private skillService: SkillService,
    private storageService: StorageService,
    private questService: QuestService,
    private jsonPlaceHolder: JsonPlaceHolderService
  ) {}

  ngOnInit(): void {}

  /**
   * calls skills and quest services to get player data, then calls storage service to store that data
   */
  lookUpUser(username: string) {
    //* call skills service
    // this.skillService
    //   .getSkills(username)
    //   .subscribe((res) => (this.player = res));
    //* call quest service
    // this.questService
    //   .getQuests(username)
    //   .subscribe((res) => (this.quests = res));
    //* console log the results to check if  they work
    // console.log(`username: ${username}`);
    // console.log(`player: ${this.player}`);
    // console.log(`quests: ${this.quests}`);
    //* bundle results into an object
    //* call storage service to store progress object
  }

  /**
   * This function fetches data from the jsonPlaceHolder API and returns an observable with that data
   * @param resource the resource to fetch from jsonPlaceHolder
   * @returns an observable
   */
  getResource(resource: JsonPlaceHolderResources) {
    console.log(resource);

    // return early if the resource was already fetched
    if (this[resource].length) {
      console.log('resource already fetched');
      return;
    }

    this.jsonPlaceHolder.getResource(resource).subscribe((data) => {
      this[resource] = data;
      console.log(this);
    });
  }
}
