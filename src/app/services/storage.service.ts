import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  /**
   * This function sets player data in localStorage
   * @param skills this will change lol
   * @param quests this will change lol
   * @param reqs this will change lol
   */
  setToken(skills: string, quests: string, reqs: string) {
    localStorage.setItem('data', JSON.stringify({ skills, quests, reqs }));
  }

  /**
   * This function retrieves player data from localStorage
   * @returns player data
   */
  getToken() {
    // get the data from localStorage
    const data = localStorage.getItem('data');
    // check if the data is falsy, if so, then return
    if (!data) return;
    // here, data exists, so return it
    return JSON.parse(data);
  }
}
