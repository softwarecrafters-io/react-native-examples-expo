import { Button, Text, View } from "react-native";
import React, {useEffect} from "react";
import { styles } from "../Theme";
import {useNavigation} from "@react-navigation/native";
import {http} from "../http/http";
import {MovieDBNowPlayingResponseDto} from "../dtos/theMovieDBDtos";

export const useMovies = () => {
    function getLatestsMovies() {
        const fullUrl = 'https://api.themoviedb.org/3/movie/now_playing/?api_key=778b6ca9b27635def28f32f56212cdc3&language=es';
        http.get<MovieDBNowPlayingResponseDto>(fullUrl)
            .then(response => console.log(response.results.map(r => r.title)))
    }

    useEffect(()=>{
        getLatestsMovies();
    }, [])

    return {

    }
}

export const HomeScreen = () => {
    const navigation = useNavigation();
    useMovies()
  return(
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
          <Button title={'Go to detail'} onPress={()=> navigation.navigate('Detail')}/>
      </View>
  )
}


