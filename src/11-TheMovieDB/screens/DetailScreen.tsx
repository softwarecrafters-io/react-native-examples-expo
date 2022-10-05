import {ActivityIndicator, Button, Dimensions, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {StackScreenProps} from "@react-navigation/stack";
import {Movie, MovieDetails, MovieSet} from "../domain/model";
import {RootStackParams} from "../StackNavigator";
import {useNavigation} from "@react-navigation/native";
import {MovieDBRepository} from "../api/repository/MovieDBRepository";


type MoviesState = {
    isLoading: boolean,
    movieDetails: MovieDetails
}

const initialState = {
    isLoading: true,
    movieDetails: MovieDetails.createEmpty()
}

const useMovieDetails = (movie:Movie) => {
    const [state, updateState] = useState<MoviesState>(initialState);

    useEffect(()=>{
        const repository = new MovieDBRepository();
        repository.getMovieDetails(movie).then(movieDetails =>
            updateState({isLoading: false, movieDetails}))
    }, [])

    return {
        movieDetails:state.movieDetails,
        isLoading: state.isLoading
    }
}

interface DetailScreenProps extends StackScreenProps<RootStackParams, 'Detail'>{

}

export const DetailScreen = ({route}:DetailScreenProps) => {
    const screenHeight = Dimensions.get('screen').height;
    const movie = route.params;
    const uri = 'https://image.tmdb.org/t/p/w500' + movie.posterPath;
    const {movieDetails, isLoading} = useMovieDetails(movie);

    const navigation = useNavigation();
    useEffect(()=> navigation.setOptions({title: movie.title}))

    return(
        <ScrollView>
        <View style={{...styles.imageContainer, height: screenHeight * 0.7}}>
            <Image source={{uri}} style={styles.moviePosterImage}></Image>
        </View>
            <View>
                <Text style={styles.title}>{movie.title}</Text>
                {isLoading && <ActivityIndicator color={'red'}/>}
                <Text style={styles.overview}>{movieDetails.overview}</Text>
            </View>
        </ScrollView>
  )
}

export const styles = StyleSheet.create({
    title:{
        alignSelf:'center',
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
        marginHorizontal: 20
    },
    overview:{
        fontSize: 14,
        margin: 15,
        paddingBottom: 30
    },
    imageContainer:{
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    moviePosterShadow:{
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    moviePosterImage:{
        flex:1,
    }
});
