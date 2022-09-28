import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import {HomeScreen} from "./screens/HomeScreen";
import {DetailScreen} from "./screens/DetailScreen";

export const TheMovieDBContainer = () => (
  <NavigationContainer>
    <StackNavigator/>
  </NavigationContainer>
)

export type RootStackParams = {
  Home: undefined,
  Detail: undefined,
}

export const StackNavigator = () =>  {
  const Stack = createStackNavigator<RootStackParams>()

  const screenOptions: StackNavigationOptions = {
    headerStyle: {
      elevation: 0,
      shadowColor: 'transparent'
    },
    cardStyle:{
      backgroundColor: 'white'
    }
  }

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={"Home"} options={{headerBackTitle:' '}} component={HomeScreen} />
      <Stack.Screen name={"Detail"} options={{headerBackTitle:' '}} component={DetailScreen} />
  </Stack.Navigator>
)}



