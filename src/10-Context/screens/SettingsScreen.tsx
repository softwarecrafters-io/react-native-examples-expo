import { Button, SafeAreaView, Text, View } from "react-native";
import React, {useContext} from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "../Theme";
import {AuthContext} from "../context/AuthContext";


export const SettingsScreen = () => {
    const {authState} = useContext(AuthContext)
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Text>{JSON.stringify(authState)}</Text>
      </View>
    )
}


