export class AppServices{
    url = 'https://swapi.dev/api'

    getFilms(){
        return fetch(`${this.url}/films`).then(v=>v.json()).then(v=>v.results);
    }

    getPlanets(){
        return fetch(`${this.url}/planets`).then(v=>v.json()).then(v=>v.results);
    }

    getSpecies(){
        return fetch(`${this.url}/species`).then(v=>v.json()).then(v=>v.results);
    }

    getPeople(){
        return fetch(`${this.url}/people`).then(v=>v.json()).then(v=>v.results);
    }



}
