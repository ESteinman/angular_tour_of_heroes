import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  private heroesURL = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesURL)
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  };

  constructor(
    private http: HttpClient, 
    private messageService: MessageService) { }
  
    private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
