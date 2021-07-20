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
        serie: false, 
        description: ''
      },
      {
        id: 1,
        title: 'Agent Carter',
        image: 'https://bit.ly/2Tn8ozk',
        portada: 'portada Agent Carter',
        year: 2015,
        link: 'https://disneyplus.com/series/agente-carter/3rh3uclvsNsT?sharesource=iOS',
        serie: true,
        description: 'Temporada 1 y 2'
      },
      {
        id: 2,
        title: 'Captain Marvel',
        image: 'https://bit.ly/3wSxC6q',
        portada: 'portada Captain Marvel',
        year: 2019,
        link: 'https://disneyplus.com/movies/capitana-marvel/38xJGlLAQy9a?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 3,
        title: 'Iron Man',
        image: 'https://bit.ly/3BmSFBp',
        portada: 'portada Iron Man',
        year: 2008,
        link: 'https://disneyplus.com/movies/iron-man-de-marvel-studios/6aM2a8mZATiu?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 4,
        title: 'Iron Man 2',
        image: 'https://bit.ly/3ivQ3Zj',
        portada: 'portada Iron Man 2',
        year: 2010,
        link: 'https://disneyplus.com/movies/iron-man-2-de-marvel-studios/lXjCr9QmGGQJ?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 5,
        title: 'Thor',
        image: 'https://bit.ly/3eFmCmJ',
        portada: 'portada Thor',
        year: 2011,
        link: 'https://disneyplus.com/movies/thor-de-marvel-studios/1p4vdKzTuhzr?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 6,
        title: 'Avengers',
        image: 'https://bit.ly/3kDCOsg',
        portada: 'portada Avengers',
        year: 2012,
        link: 'https://disneyplus.com/movies/the-avengers-los-vengadores-de-marvel-studios/2h6PcHFDbsPy?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 7,
        title: 'Iron Man 3',
        image: 'https://bit.ly/3wQ0lZv',
        portada: 'portada Iron Man 3',
        year: 2013,
        link: 'https://disneyplus.com/movies/iron-man-3-de-marvel-studios/3s4Ihq7P2c6e?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 8,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/2UZLVJ4',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2013,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 1 - Episodio 1 al 7'
      },
      {
        id: 9,
        title: 'Thor: A Dark World',
        image: 'https://bit.ly/36LD4NX',
        portada: 'portada Thor: A Dark World',
        year: 2013,
        link: 'https://disneyplus.com/movies/thor-un-mundo-oscuro-de-marvel-studios/ZHk7aM5xTbW7?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 10,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/2UZLVJ4',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2013,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 1 - Episodio 8 al 15'
      },
      {
        id: 11,
        title: 'Captain America: The Winter Soldier',
        image: 'https://bit.ly/3eCPdZY',
        portada: 'portada Captain America: The Winter Soldier',
        year: 2014,
        link: 'https://disneyplus.com/movies/capitan-america-y-el-soldado-del-invierno-de-marvel-studios/TVme5whcowSy?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 12,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/2UZLVJ4',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2014,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 1 - Episodio 16 al 22'
      },
      {
        id: 12,
        title: 'Guardians of the Galaxy',
        image: 'https://bit.ly/3kCGMRX',
        portada: 'portada Guardians of the Galaxy',
        year: 2014,
        link: 'https://disneyplus.com/movies/guardianes-de-la-galaxia-de-marvel-studios/1S4WM9h3KRR6?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 13,
        title: 'Guardians of the Galaxy: Vol 2',
        image: 'https://bit.ly/3xSW0WJ',
        portada: 'portada Guardians of the Galaxy: Vol 2',
        year: 2014,
        link: 'https://disneyplus.com/movies/guardianes-de-la-galaxia-vol2-de-marvel-studios/ZdRX4mMbp1gM?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 14,
        title: 'Daredevil',
        image: 'https://bit.ly/3kDOVFK',
        portada: 'portada Daredevil',
        year: 2015,
        link: 'https://www.netflix.com/mx/title/80018294?s=i&trkid=13747225&vlang=es&clip=81009106&t=wha',
        serie: true,
        description: 'Temporada 1'
      },
      {
        id: 15,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/2UZLVJ4',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2014,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 2 - Episodio 1 al 19'
      },
      {
        id: 14,
        title: 'Jessica Jones',
        image: 'https://bit.ly/36LUwSk',
        portada: 'portada Jessica Jones',
        year: 2015,
        link: 'https://www.netflix.com/mx/title/80002311?s=i&trkid=13747225&vlang=es&clip=80236861&t=wha',
        serie: true,
        description: 'Temporada 1'
      },
      {
        id: 15,
        title: 'Avengers: Age of Ultron',
        image: 'https://bit.ly/2Tp1E45',
        portada: 'portada Avengers: Age of Ultron',
        year: 2015,
        link: 'https://disneyplus.com/movies/avengers-era-de-ultron-de-marvel-studios/76IUxY0rNHzt?sharesource=iOS',
        serie: false,
        description: ''
      },
    ]
  }

}
