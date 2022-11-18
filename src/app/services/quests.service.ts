import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import { runemetrics } from 'runescape-api';
import { Quest } from 'runescape-api/lib/RuneScape';

@Injectable({
  providedIn: 'root',
})
export class QuestsService {
  constructor() {}

  /**
   * this function returns the player's quest progress
   * @param username - the player's username
   * @returns Observable
   */
  getQuests(username: string): Observable<Quest[]> {
    return from(runemetrics.getQuests(username));
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
