import {ActivityIndicator, Button, FlatList, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {styles} from "../Theme";
import {useNavigation} from "@react-navigation/native";
import {MovieDBRepository} from "../api/repository/MovieDBRepository";
import {Movie, MovieSet} from "../domain/model";
import {setUpTests} from "react-native-reanimated/lib/types/lib/reanimated2/jestUtils";
import {StackNavigationOptions} from "@react-navigation/stack";

type MoviesState = {
    isLoading: boolean,
    movieSet: MovieSet
}

const initialState = {
    isLoading: true,
    movieSet: MovieSet.createEmpty()
}

export const useMovies = () => {
    const [state, updateState] = useState<MoviesState>(initialState);

    useEffect(()=>{
        const repository = new MovieDBRepository();
        repository.getMovieSet().then(movieSet =>
            updateState({isLoading: false, movieSet}))
    }, [])

    return {
        movieSet:state.movieSet,
        isLoading: state.isLoading
    }
}

export const HomeScreen = () => {
    const navigation = useNavigation();
    const {movieSet, isLoading} = useMovies();
  return(
      <ScrollView>
      <View style={styles.container}>
          {isLoading && <ActivityIndicator color={'red'}/>}
          <View style={{height:360}}>
              <FlatList
                  data={movieSet.nowPlaying}
                  renderItem={(value)=>  <MoviePoster key={value.index} movie={value.item}/>}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
              />
          </View>
          <HorizontalSlider title={'Now playing'} movies={movieSet.nowPlaying}/>
          <HorizontalSlider title={'Popular'} movies={movieSet.popular}/>
          <HorizontalSlider title={'Top rated'} movies={movieSet.topRated}/>
          <HorizontalSlider title={'Upcoming'} movies={movieSet.upcoming}/>
      </View>
      </ScrollView>
  )
}

interface HorizontalSliderProps{
    title:string,
    movies: ReadonlyArray<Movie>
}

const HorizontalSlider = ({movies, title}:HorizontalSliderProps) =>
    <View style={{height:220, marginVertical:10}}>
        <Text style={{fontSize: 30, fontWeight:'bold', marginLeft: 10, marginBottom:10}}>{title}</Text>
        <FlatList
            data={movies}
            renderItem={(value)=> (
                <MoviePoster key={value.index} movie={value.item} height={160} width={100} />)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>

interface MoviePosterProps{
    movie:Movie, height?:number, width?:number
}

export const MoviePoster = ({movie, height = 320, width = 200}:MoviePosterProps) => {
    const uri = 'https://image.tmdb.org/t/p/w500' + movie.posterPath;
    const navigation = useNavigation();

    return <TouchableOpacity onPress={()=> navigation.navigate('Detail', movie)}
                             activeOpacity={0.8} style={{...styles.imageContainer, height, width}}>
        <View style={styles.moviePosterShadow}>
        <Image source={{uri}} style={styles.moviePosterImage}/>
        </View>

    </TouchableOpacity>
}

