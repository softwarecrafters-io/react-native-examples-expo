import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { Screen1 } from "./screens/Screen1";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { Screen2 } from "./screens/Screen2";
import { Screen3 } from "./screens/Screen3";
import { UserScreen } from "./screens/UserScreen";
import { User } from "./core/User";

export type RootStackParams = {
  Screen1: undefined,
  Screen2: undefined,
  Screen3: undefined,
  UserScreen: User
}

const Stack = createStackNavigator<RootStackParams>()

export const StackNavigatorContainer = () => (
  <NavigationContainer>
    <StackNavigator/>
  </NavigationContainer>
)

export const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={screenOptions}
  >
    <Stack.Screen name={"Screen1"} options={{headerBackTitle:' '}} component={Screen1} />
    <Stack.Screen name={"Screen2"} options={{headerBackTitle:' '}} component={Screen2} />
    <Stack.Screen name={"Screen3"} options={{headerBackTitle:' '}} component={Screen3} />
    <Stack.Screen name={"UserScreen"} options={{headerBackTitle:' '}} component={UserScreen} />
  </Stack.Navigator>
)

const screenOptions: StackNavigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowColor: 'transparent'
  },
  cardStyle:{
    backgroundColor: 'white'
  }
}

