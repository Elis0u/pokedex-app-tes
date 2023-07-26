import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {
  // {...'a'..'ab..abs...ab...abc........}
  searchTerm = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router) { }

  ngOnInit() { }

  search(term: string){
    this.searchTerm.next(term);
  }

  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
