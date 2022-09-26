import { Button, Text, View } from "react-native";
import React, { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../StackNavigator";
import { styles } from "../Theme";
import { User } from "../core/User";
import { DrawerScreenProps } from "@react-navigation/drawer";

interface Props extends DrawerScreenProps<RootStackParams, 'Screen1'>{}

export const Screen1 = ({ navigation }:Props) => {
  const user = new User('miguelghz', "Miguel A. Gómez")
  /*useEffect(()=>{
    navigation.setOptions({
      headerLeft: ()=> <Button title={'menu'} onPress={()=> navigation.toggleDrawer()}></Button>
    })
  })*/

  return(
      <View style={styles.container}>
        <Text style={styles.title}>Screen 1</Text>
        <Button title={"Go to Screen 2"} onPress={()=> navigation.navigate('Screen2')}></Button>
        <Button title={"Go to Screen 4"} onPress={()=> navigation.navigate('UserScreen', user)}></Button>
      </View>
  )
}


