import { Button, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "../Theme";
import { RootDrawerParams } from "../DrawerNavigator";


export const SettingsScreen = () => {
  return(
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
      </View>
  )
}


