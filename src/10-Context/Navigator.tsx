import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import { SettingsScreen } from "./screens/SettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { ContactScreen } from "./screens/ContactScreen";
import { colors } from "./Theme";
import {View, Text, Platform} from "react-native";
import {HomeScreen} from "./screens/HomeScreen";
import {AuthProvider} from "./context/AuthContext";

const BottomTabIOS = createBottomTabNavigator();

export const ContextContainer = () =>
  <NavigationContainer>
      <AuthProvider>
          <TabNavigator/>
      </AuthProvider>
  </NavigationContainer>

const TabNavigator = () => <BottomTabIOS.Navigator
    sceneContainerStyle={{
        backgroundColor: 'white'
    }}
    screenOptions={({route}) => ({
        tabBarActiveTintColor: 'purple',
        tabBarStyle: {
            borderTopColor: colors.primary,
            borderTopWidth: 0,
            elevation: 0
        },
        tabBarIcon: (props) => {
            switch (route.name) {
                case 'Home':
                    return <Ionicons name="home-outline" size={32} color="purple"/>
                case 'Settings':
                    return <Ionicons name="cog-outline" size={32} color="purple"/>
                case 'Contact':
                    return <Ionicons name="people-outline" size={32} color="purple"/>
            }
        }
    })}
>
    {/*<BottomTabIOS.Screen name="Settings" options={{title: 'Settings', tabBarIcon: (props)=><View><Text>T1</Text></View>}}  component={SettingsScreen} />*/}
    <BottomTabIOS.Screen name="Home" options={{title: 'Home'}} component={HomeScreen}/>
    <BottomTabIOS.Screen name="Settings" options={{title: 'Settings'}} component={SettingsScreen}/>
    <BottomTabIOS.Screen name="Contact" options={{title: 'Contact'}} component={ContactScreen}/>
</BottomTabIOS.Navigator>;
