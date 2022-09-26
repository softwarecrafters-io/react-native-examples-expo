import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions, DrawerContentScrollView,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { styles } from "./Theme";
import { BottomTabNavigator } from "./BottomTabNavigator";

export type RootDrawerParams = {
  StackNavigator: undefined,
  BottomTabNavigator: undefined,
}

const Drawer = createDrawerNavigator<RootDrawerParams>()

export const DrawerNavigatorCustomContainer = () =>
  (
    <NavigationContainer>
      <DrawerNavigatorCustom />
    </NavigationContainer>
  )

export const DrawerNavigatorCustom = () => {
  const {width} = useWindowDimensions()
  const drawerType = width >= 768 ? 'permanent': 'front';
  return (
    <Drawer.Navigator drawerType= {drawerType} screenOptions={screenOptions} drawerContent={InternalMenu}>
      <Drawer.Screen name={"StackNavigator"} options={{title: 'Home'}} component={StackNavigator} />
      <Drawer.Screen name={"BottomTabNavigator"} options={{title: 'Options'}} component={BottomTabNavigator} />
    </Drawer.Navigator>
  )
}

const screenOptions: DrawerNavigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowColor: 'transparent'
  },
}

const InternalMenu = ({ navigation }:DrawerContentComponentProps<DrawerContentOptions>) =>{
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg' }}></Image>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={()=> navigation.navigate('StackNavigator')}>
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={()=> navigation.navigate('BottomTabNavigator')}>
          <Text style={styles.menuText}>Options</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}
