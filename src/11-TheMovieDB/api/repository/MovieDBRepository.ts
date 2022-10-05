import {http} from "../http";
import {MovieDetailsResponseDto, MovieResponseDto} from "../dtos/theMovieDBDtos";
import {Movie, MovieDetails, MovieSet} from "../../domain/model";


export class MovieDBRepository {
    readonly baseUrl = 'https://api.themoviedb.org/3/movie/';
    readonly apiKey = '778b6ca9b27635def28f32f56212cdc3';

    getMovieSet(){
        return Promise.all([
            this.getNowPlaying(),
            this.getPopular(),
            this.getTopRated(),
            this.getUpcoming(),
        ]).then(result => (new MovieSet(result[0], result[1], result[2],result[3])))
    }

    getMovieDetails(movie:Movie){
        const url = this.prepareUrl(movie.id.toString())
        return http.get<MovieDetailsResponseDto>(url)
            .then(response => MovieDetails.create({...movie, overview: response.overview}))
    }

    private getNowPlaying() {
        const url = this.prepareUrl('now_playing/')
        return http.get<MovieResponseDto>(url)
            .then(response => response.results.map(this.fromDtoToMovie))
    }

    private getPopular() {
        const url = this.prepareUrl('popular/')
        return http.get<MovieResponseDto>(url)
            .then(response => response.results.map(this.fromDtoToMovie))
    }

    private getTopRated() {
        const url = this.prepareUrl('top_rated/')
        return http.get<MovieResponseDto>(url)
            .then(response => response.results.map(this.fromDtoToMovie))
    }

    private getUpcoming() {
        const url = this.prepareUrl('upcoming/')
        return http.get<MovieResponseDto>(url)
            .then(response => response.results.map(this.fromDtoToMovie))
    }

    private fromDtoToMovie = (resultDto: ResultMovieDbDto) =>{
        return new Movie(resultDto.id, resultDto.title, resultDto.poster_path)
    }

    private prepareUrl(path: string) {
        const result = `${this.baseUrl}${path}?api_key=${this.apiKey}`;
        console.log(result)
        return result;
    }
}
