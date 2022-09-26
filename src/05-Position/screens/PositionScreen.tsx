import { SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";



export const PositionScreen = () => {

  return(
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={[styles.box,styles.blueBox] }/>
        <View style={[styles.box,styles.redBox]}/>
        <View style={[styles.box,styles.greenBox]}/>
        <View style={[styles.box,styles.yellowBox]}/>
      </View>
      <Text></Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
  },
  container: {
    //flex: 1,
    height: 400,
    width: 300,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'grey'
  },
  box:{
    borderWidth: 5,
    borderColor: '#333',
    width: 100,
    height: 100,
    position: 'absolute',
  },
  blueBox:{
    backgroundColor: 'blue',
    top:0,
    left:0,
  },
  redBox:{
    backgroundColor: 'red',
    top:0,
    right:0
  },
  greenBox:{
    backgroundColor: 'green',
    bottom:0,
    right:0
  },
  yellowBox:{
    backgroundColor: 'yellow',
    bottom:0,
    left:0,
  }
});
