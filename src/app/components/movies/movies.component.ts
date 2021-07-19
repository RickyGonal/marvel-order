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
        title: 'Iron Man',
        image: 'portada Iron Man',
        portada: 'portada Iron Man',
        year: 2008,
        link: 'pelicula Disney +',
        sinopsis: 'sinopsis Iron Man'
      },
      {
        id: 1,
        title: 'Hulk',
        image: 'portada Hulk',
        portada: 'portada Hulk',
        year: 2008,
        link: 'pelicula Disney +',
        sinopsis: 'sinopsis Hulk'
      }
    ]
  }

}
