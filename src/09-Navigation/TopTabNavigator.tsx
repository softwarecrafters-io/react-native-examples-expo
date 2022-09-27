import React from "react";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import {SettingsScreen} from "./screens/SettingsScreen";
import {NavigationContainer} from "@react-navigation/native";
import {ContactScreen} from "./screens/ContactScreen";
import {colors} from "./Theme";

const TopTab = createMaterialTopTabNavigator();

export const TopTabNavigatorContainer = () =>
  <NavigationContainer>
    <TopTabNavigator/>
  </NavigationContainer>

export const TopTabNavigator = () => <TopTab.Navigator
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
        tabBarPressColor:'red',
        tabBarIndicatorStyle: {backgroundColor:'black'},
        tabBarIcon: (props) => {
            switch (route.name) {
                case 'Settings':
                    return <Ionicons name="cog" size={24} color="purple"/>
                case 'Contact':
                    return <Ionicons name="people" size={24} color="purple"/>
            }
        }
    })}
>
    {/*<TopTab.Screen name="Settings" options={{title: 'Settings', tabBarIcon: (props)=><View><Text>T1</Text></View>}}  component={SettingsScreen} />*/}
    <TopTab.Screen name="Settings" options={{title: 'Settings'}} component={SettingsScreen}/>
    <TopTab.Screen name="Contact" options={{title: 'Contact'}} component={ContactScreen}/>
</TopTab.Navigator>


