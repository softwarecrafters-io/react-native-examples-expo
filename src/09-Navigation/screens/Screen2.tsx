import { Button, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../Theme";

export const Screen2 = () => {
  const navigation = useNavigation()
  return(
      <View style={styles.container}>
        <Text style={styles.title}>Screen 2</Text>
        <Button title={'Go to screen 3'} onPress={()=> navigation.navigate('Screen3' as never)}></Button>
      </View>
  )
}

