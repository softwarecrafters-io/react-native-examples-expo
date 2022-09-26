import { SafeAreaView, StyleSheet, Text, View, Dimensions, useWindowDimensions } from "react-native";
import React from "react";



export const DimensionsScreen = () => {
  //const dimensions = Dimensions.get('window') No cambia cuando rotas
  const dimensions = useWindowDimensions();

  return(
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={{...styles.blueBox, width: dimensions.width * 0.2}}></View>
        <View style={styles.redBox}></View>
      </View>
      <Text>Width: {dimensions.width}, Height: {dimensions.height}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
  },
  container: {
    height: 300,
    backgroundColor: 'grey'
  },
  blueBox:{
    backgroundColor: 'blue',
    width: '50%',
    height: '50%'
  },
  redBox:{
    backgroundColor: 'red',
  }
});
