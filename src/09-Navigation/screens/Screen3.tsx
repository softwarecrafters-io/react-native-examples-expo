import { Button, Text, View } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "../Theme";
import { RootStackParams } from "../StackNavigator";

interface Props extends StackScreenProps<RootStackParams, 'Screen3'>{}

export const Screen3 = ({ navigation }:Props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Screen 1</Text>
      <Button title={"Go back"} onPress={()=> navigation.pop()}></Button>
      <Button title={"Go home"} onPress={()=> navigation.popToTop()}></Button>
    </View>
  )
}
