import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { SettingsScreen } from "./screens/SettingsScreen";
import { useWindowDimensions } from "react-native";

export type RootDrawerParams = {
  StackNavigator: undefined,
  SettingsScreen: undefined,
}

const Drawer = createDrawerNavigator<RootDrawerParams>()

export const DrawerNavigatorContainer = () => {
  const {width} = useWindowDimensions()
  const drawerType = width >= 768 ? 'permanent': 'front';
  return (
  <NavigationContainer>
    <Drawer.Navigator screenOptions={screenOptions} >
      <Drawer.Screen name={"StackNavigator"} options={{title: 'Home'}} component={StackNavigator} />
      <Drawer.Screen name={"SettingsScreen"} options={{title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
)}

const screenOptions: DrawerNavigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowColor: 'transparent'
  },
}

