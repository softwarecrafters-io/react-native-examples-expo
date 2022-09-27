import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import { SettingsScreen } from "./screens/SettingsScreen";
import { DrawerNavigatorCustom } from "./DrawerNavigatorCustom";
import { NavigationContainer } from "@react-navigation/native";
import { ContactScreen } from "./screens/ContactScreen";
import { colors } from "./Theme";
import {View, Text, Platform} from "react-native";

const BottomTabIOS = createBottomTabNavigator();

export const BottomTabNavigatorContainer = () =>
  <NavigationContainer>
    <BottomTabNavigator/>
  </NavigationContainer>

export const BottomTabNavigator = () => {
    return Platform.OS === 'ios'
        ? BottomTabIOSNavigator()
        : BottomTabAndroidNavigator()
};

const BottomTabIOSNavigator = () => <BottomTabIOS.Navigator
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
                case 'Settings':
                    return <Ionicons name="cog" size={32} color="purple"/>
                case 'Contact':
                    return <Ionicons name="people" size={32} color="purple"/>
            }
        }
    })}
>
    {/*<BottomTabIOS.Screen name="Settings" options={{title: 'Settings', tabBarIcon: (props)=><View><Text>T1</Text></View>}}  component={SettingsScreen} />*/}
    <BottomTabIOS.Screen name="Settings" options={{title: 'Settings'}} component={SettingsScreen}/>
    <BottomTabIOS.Screen name="Contact" options={{title: 'Contact'}} component={ContactScreen}/>
</BottomTabIOS.Navigator>;

const BottomTabAndroid = createMaterialBottomTabNavigator();
const BottomTabAndroidNavigator = () => (
    <BottomTabAndroid.Navigator
    sceneAnimationEnabled={true}
    barStyle={{
        backgroundColor: 'purple',
    }}

    screenOptions={({route}) => ({
        tabBarIcon: (props) => {
            switch (route.name) {
                case 'Settings':
                    return <Ionicons name="cog-outline" size={22} color="white"/>
                case 'Contact':
                    return <Ionicons name="people-outline" size={22} color="white"/>
            }
        }
    })}
    >
        <BottomTabAndroid.Screen name="Settings" options={{title: 'Settings tal'}} component={SettingsScreen}/>
        <BottomTabAndroid.Screen name="Contact" options={{title: 'Contact'}} component={ContactScreen}/>
    </BottomTabAndroid.Navigator>
);
