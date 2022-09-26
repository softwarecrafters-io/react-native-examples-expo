import { Button, Text, View } from "react-native";
import React, { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../StackNavigator";
import { styles } from "../Theme";

interface Props extends StackScreenProps<RootStackParams, 'UserScreen'>{}

export const UserScreen = ({ route, navigation }:Props) => {
  useEffect(()=>{
    navigation.setOptions({
      title: route.params.username
    })
  })

  return(
      <View style={styles.container}>
        <Text style={styles.title}>{route.params.name}</Text>
        <Button title={"Go back"} onPress={()=> navigation.pop()}></Button>
      </View>
  )
}


