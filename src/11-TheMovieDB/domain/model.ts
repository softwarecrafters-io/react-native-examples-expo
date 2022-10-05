export class Movie {
    constructor(readonly id:number, readonly title:string, readonly posterPath:string) {}
}

export type MovieDetailsParams = Movie & {overview:string};

export class MovieDetails{
    constructor(
        readonly id:number,
        readonly title:string,
        readonly posterPath:string,
        readonly overview:string
    ) {}

    static create({id, title, posterPath, overview}:MovieDetailsParams){
        return new MovieDetails(id, title, posterPath, overview)
    }

    static createEmpty() {
        return new MovieDetails(0, '', '', '')
    }
}

export class MovieSet{
    constructor(
        readonly nowPlaying: ReadonlyArray<Movie>,
        readonly popular:ReadonlyArray<Movie>,
        readonly topRated:ReadonlyArray<Movie>,
        readonly upcoming:ReadonlyArray<Movie>) {}

    static createEmpty(){
        return new MovieSet([], [], [], [])
    }
}
