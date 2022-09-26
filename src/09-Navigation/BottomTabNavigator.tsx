import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from "./screens/SettingsScreen";
import { DrawerNavigatorCustom } from "./DrawerNavigatorCustom";
import { NavigationContainer } from "@react-navigation/native";
import { ContactScreen } from "./screens/ContactScreen";
import { colors } from "./Theme";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

export const BottomTabNavigatorContainer = () =>
  <NavigationContainer>
    <BottomTabNavigator/>
  </NavigationContainer>

export const BottomTabNavigator = () => (
  <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor:'white'
    }}
    tabBarOptions={{
      activeTintColor: colors.primary,
      style:{
        borderTopColor: colors.primary,
        borderTopWidth: 0,
        elevation: 0
      }
    }}
    screenOptions={({route})=> ({
      tabBarIcon: (props) => {
        switch (route.name){
          case 'Settings':
            return <Text>T1</Text>
          case 'Contact':
            return <Text>T2</Text>
        }
      }
    })}
  >
    {/*<Tab.Screen name="Settings" options={{title: 'Settings', tabBarIcon: (props)=><View><Text>T1</Text></View>}}  component={SettingsScreen} />*/}
    <Tab.Screen name="Settings" options={{title: 'Settings'}}  component={SettingsScreen} />
    <Tab.Screen name="Contact" options={{title: 'Contact'}} component={ContactScreen} />
  </Tab.Navigator>
);
