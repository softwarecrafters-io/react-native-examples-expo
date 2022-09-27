import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { styles } from "./Theme";
import { BottomTabNavigator } from "./BottomTabNavigator";
import {TopTabNavigator} from "./TopTabNavigator";
import Ionicons from '@expo/vector-icons/Ionicons';

export type RootDrawerParams = {
  StackNavigator: undefined,
  BottomTabNavigator: undefined,
  TopTabNavigator: undefined,
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
    <Drawer.Navigator  screenOptions={{...screenOptions, drawerType}} drawerContent={InternalMenu}>
      <Drawer.Screen name={"StackNavigator"}  component={StackNavigator} />
      <Drawer.Screen name={"BottomTabNavigator"} component={BottomTabNavigator} />
      <Drawer.Screen name={"TopTabNavigator"} component={TopTabNavigator} />
    </Drawer.Navigator>
  )
}

const screenOptions: DrawerNavigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowColor: 'transparent'
  },
}

const InternalMenu = ({ navigation }:DrawerContentComponentProps) =>{
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg' }}></Image>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={()=> navigation.navigate('StackNavigator')}>
            <Ionicons name="compass-outline" size={24} color="purple"/>
            <Text style={styles.menuText}>Stack Navigator </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={()=> navigation.navigate('BottomTabNavigator')}>
            <Ionicons name="cloud-outline" size={24} color="purple"/>
            <Text style={styles.menuText}>Bottom Tab </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={()=> navigation.navigate('TopTabNavigator')}>
            <Ionicons name="cog" size={24} color="purple"/>
            <Text style={styles.menuText}>Top Tab </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}
