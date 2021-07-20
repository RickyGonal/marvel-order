import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
 
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];


  constructor() { }

  ngOnInit(): void {
    this.movies = [
      {
        id: 0,
        title: 'Captain America',
        image: 'https://bit.ly/3kyDYFu',
        portada: 'portada Captain America',
        year: 2011,
        link: 'https://disneyplus.com/movies/capitan-america-y-el-soldado-del-invierno-de-marvel-studios/TVme5whcowSy?sharesource=iOS',
        sinopsis: 'sinopsis Captain America'
      },
      {
        id: 1,
        title: 'Agent Carter',
        image: 'https://bit.ly/2Tn8ozk',
        portada: 'portada Agent Carter',
        year: 2015-2016,
        link: 'https://disneyplus.com/series/agente-carter/3rh3uclvsNsT?sharesource=iOS',
        sinopsis: 'sinopsis Iron Man'
      },
      {
        id: 2,
        title: 'Iron Man',
        image: 'https://bit.ly/3BmSFBp',
        portada: 'portada Iron Man',
        year: 2008,
        link: 'https://disneyplus.com/movies/iron-man-de-marvel-studios/6aM2a8mZATiu?sharesource=iOS',
        sinopsis: 'sinopsis Iron Man'
      },
    ]
  }

}
