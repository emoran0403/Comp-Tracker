import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestService {
  constructor(private http: HttpClient) {}

  apiURL: string = `https://apps.runescape.com/runemetrics/quests?user=`;

  /**
   * This function returns the player's quest progress
   * @param username - the player's username
   * @returns Observable
   */
  getQuests(username: string): Observable<any> {
    console.log(`${username} in quest service!`);
    return this.http.get<any>(`${this.apiURL}${username}`);
  }
}

let wow = [
  {
    name: 'A Fairy Tale I - Growing Pains',
    status: 'COMPLETED',
    difficulty: 2,
    members: true,
    questPoints: 2,
    eligible: true,
  },
  {
    name: 'A Fairy Tale II - Cure a Queen',
    status: 'COMPLETED',
    difficulty: 2,
    members: true,
    questPoints: 2,
    eligible: true,
  },
  {
    name: "A Fairy Tale III - Battle at Ork's Rift",
    status: 'COMPLETED',
    difficulty: 2,
    members: true,
    questPoints: 2,
    eligible: true,
  },
  {
    name: "A Soul's Bane",
    status: 'COMPLETED',
    difficulty: 0,
    members: false,
    questPoints: 1,
    eligible: true,
  },
  {
    name: 'A Tail of Two Cats',
    status: 'COMPLETED',
    difficulty: 1,
    members: true,
    questPoints: 2,
    eligible: true,
  },
  // ... 200+ more items
];
