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

  menuClick(){

  }

  ngOnInit(): void {
    this.movies = [
      {
        id: 0,
        title: 'Captain America',
        image: 'https://bit.ly/3xY0awM',
        portada: 'portada Captain America',
        year: 2011,
        link: 'https://disneyplus.com/movies/capitan-america-y-el-soldado-del-invierno-de-marvel-studios/TVme5whcowSy?sharesource=iOS',
        serie: false, 
        description: ''
      },
      {
        id: 1,
        title: 'Agent Carter',
        image: 'https://bit.ly/3y1myVM',
        portada: 'portada Agent Carter',
        year: 2015,
        link: 'https://disneyplus.com/series/agente-carter/3rh3uclvsNsT?sharesource=iOS',
        serie: true,
        description: 'Temporada 1 y 2'
      },
      {
        id: 2,
        title: 'Captain Marvel',
        image: 'https://bit.ly/3hW3QJG',
        portada: 'portada Captain Marvel',
        year: 2019,
        link: 'https://disneyplus.com/movies/capitana-marvel/38xJGlLAQy9a?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 3,
        title: 'Iron Man',
        image: 'https://bit.ly/36V6bhO',
        portada: 'portada Iron Man',
        year: 2008,
        link: 'https://disneyplus.com/movies/iron-man-de-marvel-studios/6aM2a8mZATiu?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 4,
        title: 'Iron Man 2',
        image: 'https://bit.ly/3eLrOW8',
        portada: 'portada Iron Man 2',
        year: 2010,
        link: 'https://disneyplus.com/movies/iron-man-2-de-marvel-studios/lXjCr9QmGGQJ?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 5,
        title: 'Thor',
        image: 'https://bit.ly/3wTOQjH',
        portada: 'portada Thor',
        year: 2011,
        link: 'https://disneyplus.com/movies/thor-de-marvel-studios/1p4vdKzTuhzr?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 6,
        title: 'Avengers',
        image: 'https://bit.ly/3znLMy4',
        portada: 'portada Avengers',
        year: 2012,
        link: 'https://disneyplus.com/movies/the-avengers-los-vengadores-de-marvel-studios/2h6PcHFDbsPy?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 7,
        title: 'Iron Man 3',
        image: 'https://bit.ly/3hXzeHJ',
        portada: 'portada Iron Man 3',
        year: 2013,
        link: 'https://disneyplus.com/movies/iron-man-3-de-marvel-studios/3s4Ihq7P2c6e?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 8,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/3eNl0Y1',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2013,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 1 - Episodio 1 al 7'
      },
      {
        id: 9,
        title: 'Thor: A Dark World',
        image: 'https://bit.ly/3zkTvge',
        portada: 'portada Thor: A Dark World',
        year: 2013,
        link: 'https://disneyplus.com/movies/thor-un-mundo-oscuro-de-marvel-studios/ZHk7aM5xTbW7?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 10,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/3eNl0Y1',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2013,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 1 - Episodio 8 al 15'
      },
      {
        id: 11,
        title: 'Captain America: The Winter Soldier',
        image: 'https://bit.ly/3iFVGEm',
        portada: 'portada Captain America: The Winter Soldier',
        year: 2014,
        link: 'https://disneyplus.com/movies/capitan-america-y-el-soldado-del-invierno-de-marvel-studios/TVme5whcowSy?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 12,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/3eNl0Y1',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2014,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 1 - Episodio 16 al 22'
      },
      {
        id: 13,
        title: 'Guardians of the Galaxy',
        image: 'https://bit.ly/3eMkZDM',
        portada: 'portada Guardians of the Galaxy',
        year: 2014,
        link: 'https://disneyplus.com/movies/guardianes-de-la-galaxia-de-marvel-studios/1S4WM9h3KRR6?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 14,
        title: 'Guardians of the Galaxy: Vol 2',
        image: 'https://bit.ly/3kHK2M1',
        portada: 'portada Guardians of the Galaxy: Vol 2',
        year: 2014,
        link: 'https://disneyplus.com/movies/guardianes-de-la-galaxia-vol2-de-marvel-studios/ZdRX4mMbp1gM?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 15,
        title: 'Daredevil',
        image: 'https://bit.ly/2V0pWSm',
        portada: 'portada Daredevil',
        year: 2015,
        link: 'https://www.netflix.com/mx/title/80018294?s=i&trkid=13747225&vlang=es&clip=81009106&t=wha',
        serie: true,
        description: 'Temporada 1'
      },
      {
        id: 16,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/3eNl0Y1',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2014,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 2 - Episodio 1 al 19'
      },
      {
        id: 17,
        title: 'Jessica Jones',
        image: 'https://bit.ly/3BvqrV7',
        portada: 'portada Jessica Jones',
        year: 2015,
        link: 'https://www.netflix.com/mx/title/80002311?s=i&trkid=13747225&vlang=es&clip=80236861&t=wha',
        serie: true,
        description: 'Temporada 1'
      },
      {
        id: 18,
        title: 'Avengers: Age of Ultron',
        image: 'https://bit.ly/3rr4jXs',
        portada: 'portada Avengers: Age of Ultron',
        year: 2015,
        link: 'https://disneyplus.com/movies/avengers-era-de-ultron-de-marvel-studios/76IUxY0rNHzt?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 19,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/3eNl0Y1',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2014,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 2 - Episodio 20 al 22'
      },
      {
        id: 20,
        title: 'Daredevil',
        image: 'https://bit.ly/3rsVYm8',
        portada: 'portada Daredevil',
        year: 2016,
        link: 'https://www.netflix.com/mx/title/80018294?s=i&trkid=13747225&vlang=es&clip=81009106&t=wha',
        serie: true,
        description: 'Temporada 2'
      },
      {
        id: 21,
        title: 'Luke Cage',
        image: 'https://bit.ly/36Wg7rb',
        portada: 'portada Luke Cage',
        year: 2016,
        link: 'https://www.netflix.com/mx/title/80002537?s=i&trkid=13747225&vlang=es&clip=80993488&t=wha',
        serie: true,
        description: 'Temporada 1'
      },
      {
        id: 22,
        title: 'Ant Man',
        image: 'https://bit.ly/36RlAzC',
        portada: 'portada AntMan',
        year: 2015,
        link: 'https://disneyplus.com/movies/ant-man-el-hombre-hormiga-de-marvel-studios/5c92KVf1zgUX?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 23,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/3eNl0Y1',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2016,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 3 - Episodio 1 al 19'
      },
      {
        id: 24,
        title: 'Iron Fist',
        image: 'https://bit.ly/3kMax34',
        portada: 'portada Iron Fist',
        year: 2017,
        link: 'https://www.netflix.com/mx/title/80002612?s=i&trkid=13747225&vlang=es&clip=80170482&t=wha',
        serie: true,
        description: 'Temporada 1'
      },
      {
        id: 25,
        title: 'Captain America: Civil War',
        image: 'https://bit.ly/3y0HP1V',
        portada: 'portada Captain America: Civil War',
        year: 2016,
        link: 'https://disneyplus.com/movies/capitan-america-civil-war-de-marvel-studios/4ovfyKnnIBCg?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 26,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/3eNl0Y1',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2016,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 3 - Episodio 20 al 22'
      },
      {
        id: 27,
        title: 'The Defenders',
        image: 'https://bit.ly/3rpXF3O',
        portada: 'portada The Defenders',
        year: 2017,
        link: 'https://www.netflix.com/mx/title/80002566?s=i&trkid=13747225&vlang=es&clip=80201017&t=wha',
        serie: true,
        description: 'Temporada 1'
      },
      {
        id: 28,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/3eNl0Y1',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2017,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 4 - Episodio 1 al 11'
      },
      {
        id: 29,
        title: 'Doctor Strange',
        image: 'https://bit.ly/3wXXcH6',
        portada: 'portada Doctor Strange',
        year: 2016,
        link: 'https://disneyplus.com/movies/doctor-strange-hechicero-supremo-de-marvel-studios/4GgMJ1aHKHA2?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 30,
        title: 'Thor Ragnarok',
        image: 'https://bit.ly/2TtNpuJ',
        portada: 'portada Thor Ragnarok',
        year: 2016,
        link: 'https://disneyplus.com/movies/thor-ragnarok-de-marvel-studios/3XqAT8UV8ojS?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 31,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/3eNl0Y1',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2017,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 4 - Episodio 12 al 22'
      },
      {
        id: 32,
        title: 'Spiderman HomeComing',
        image: 'https://bit.ly/3y2YxxJ',
        portada: 'portada Spiderman HomeComing',
        year: 2017,
        link: 'https://tv.apple.com/mx/movie/spider-man-homecoming/umc.cmc.2sbgqu6gpbevxnjjhfd4ahuvn',
        serie: false,
        description: ''
      },
      {
        id: 33,
        title: 'Black Panther',
        image: 'https://bit.ly/3wWig0z',
        portada: 'portada Black Panther',
        year: 2018,
        link: 'https://disneyplus.com/movies/pantera-negra-de-marvel-studios/1GuXuYPj99Ke?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 34,
        title: 'Inhumans',
        image: 'https://bit.ly/36SN7Ay',
        portada: 'portada Inhumans',
        year: 2017,
        link: 'https://disneyplus.com/series/inhumans/6VZXWp9jaYsT?sharesource=iOS',
        serie: true,
        description: 'Temporada 1'
      },
      {
        id: 35,
        title: 'The Punisher',
        image: 'https://bit.ly/3BGtlqq',
        portada: 'portada The Punisher',
        year: 2017,
        link: 'https://www.netflix.com/mx/title/80117498?s=i&trkid=13747225&vlang=es&clip=80217573&t=wha',
        serie: true,
        description: 'Temporada 1'
      },
      {
        id: 36,
        title: 'Runaways',
        image: 'https://bit.ly/36T88ez',
        portada: 'portada Runaways',
        year: 2017,
        link: 'https://disneyplus.com/series/runaways/FrnyN9YoJj46?sharesource=iOS',
        serie: true,
        description: 'Temporada 1'
      },
      {
        id: 37,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/3eNl0Y1',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2018,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 5'
      },
      {
        id: 38,
        title: 'Jessica Jones',
        image: 'https://bit.ly/3rt3ptr',
        portada: 'portada Jessica Jones',
        year: 2018,
        link: 'https://www.netflix.com/mx/title/80002311?s=i&trkid=13747225&vlang=es&clip=80236861&t=wha',
        serie: true,
        description: 'Temporada 2'
      },
      {
        id: 39,
        title: 'Luke Cage',
        image: 'https://bit.ly/36Wg7rb',
        portada: 'portada Luke Cage',
        year: 2018,
        link: 'https://www.netflix.com/mx/title/80002537?s=i&trkid=13747225&vlang=es&clip=80993488&t=wha',
        serie: true,
        description: 'Temporada 2'
      },
      {
        id: 40,
        title: 'The Punisher',
        image: 'https://bit.ly/3xYLpcN',
        portada: 'portada The Punisher',
        year: 2019,
        link: 'https://www.netflix.com/mx/title/80117498?s=i&trkid=13747225&vlang=es&clip=80217573&t=wha',
        serie: true,
        description: 'Temporada 2'
      },
      {
        id: 41,
        title: 'Jessica Jones',
        image: 'https://bit.ly/2UHfa3v',
        portada: 'portada Jessica Jones',
        year: 2019,
        link: 'https://www.netflix.com/mx/title/80002311?s=i&trkid=13747225&vlang=es&clip=80236861&t=wha',
        serie: true,
        description: 'Temporada 3'
      },
      {
        id: 42,
        title: 'Iron Fist',
        image: 'https://bit.ly/3kMax34',
        portada: 'portada Iron Fist',
        year: 2018,
        link: 'https://www.netflix.com/mx/title/80002612?s=i&trkid=13747225&vlang=es&clip=80170482&t=wha',
        serie: true,
        description: 'Temporada 2'
      },
      {
        id: 43,
        title: 'Daredevil',
        image: 'https://bit.ly/3rsVYm8',
        portada: 'portada Daredevil',
        year: 2018,
        link: 'https://www.netflix.com/mx/title/80018294?s=i&trkid=13747225&vlang=es&clip=81009106&t=wha',
        serie: true,
        description: 'Temporada 3'
      },
      {
        id: 44,
        title: 'Runaways',
        image: 'https://bit.ly/36T88ez',
        portada: 'portada Runaways',
        year: 2018,
        link: 'https://disneyplus.com/series/runaways/FrnyN9YoJj46?sharesource=iOS',
        serie: true,
        description: 'Temporada 2'
      },
      {
        id: 45,
        title: 'Black Widow',
        image: 'https://bit.ly/2Wcd9gg',
        portada: 'portada Black Widow',
        year: 2021,
        link: 'URL no disponible',
        serie: false,
        description: ''
      },
      {
        id: 46,
        title: 'Ant Man and the Wasp',
        image: 'https://bit.ly/3zpGZfp',
        portada: 'portada Ant Man and the Wasp',
        year: 2018,
        link: 'https://disneyplus.com/movies/ant-man-wasp-de-marvel-studios/5D7wkVHmlCKU?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 47,
        title: 'Avengers Infinity War',
        image: 'https://bit.ly/3ztq0c2',
        portada: 'portada Avengers Infinity War',
        year: 2018,
        link: 'https://disneyplus.com/movies/avengers-infinity-war-de-marvel-studios/1WEuZ7H6y39v?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 48,
        title: 'Agents of S.H.I.E.L.D',
        image: 'https://bit.ly/3eNl0Y1',
        portada: 'portada Agents of S.H.I.E.L.D',
        year: 2019,
        link: 'https://disneyplus.com/series/agentes-de-shield/2UT4VQrwpVgi?sharesource=iOS',
        serie: true,
        description: 'Temporada 6'
      },
      {
        id: 49,
        title: 'Avengers Endgame',
        image: 'https://bit.ly/3rrb4bG',
        portada: 'portada Avengers Endgame',
        year: 2019,
        link: 'https://disneyplus.com/movies/avengers-endgame-de-marvel-studios/aRbVJUb2h2Rf?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 50,
        title: 'LOKI',
        image: 'https://bit.ly/2V8XNZa',
        portada: 'portada LOKI',
        year: 2021,
        link: 'https://disneyplus.com/series/loki/6pARMvILBGzF?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 51,
        title: 'Wanda Vision',
        image: 'https://bit.ly/2UZ57Xr',
        portada: 'portada Wanda Vision',
        year: 2021,
        link: 'https://disneyplus.com/series/wandavision/4SrN28ZjDLwH?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 52,
        title: 'The Falcon and the Winter Soldier',
        image: 'https://bit.ly/2Tt6a1o',
        portada: 'portada The Falcon and the Winter Soldier',
        year: 2021,
        link: 'https://disneyplus.com/series/falcon-y-el-soldado-del-invierno/4gglDBMx8icA?sharesource=iOS',
        serie: false,
        description: ''
      },
      {
        id: 53,
        title: 'Spiderman Far From Home',
        image: 'https://bit.ly/3wT8c8R',
        portada: 'portada Spiderman Far From Home',
        year: 2019,
        link: 'https://www.primevideo.com/detail/0SP2T0F2VT868QB7T5OUUV18LG/ref=atv_sr_fle_c_Tn74RA__1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B085NWVT1F&qid=1626976716',
        serie: false,
        description: ''
      }
    ]
  }

}
