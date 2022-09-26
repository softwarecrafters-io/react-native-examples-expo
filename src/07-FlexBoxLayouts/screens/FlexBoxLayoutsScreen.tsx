import { SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";



export const FlexBoxLayouts = () => {

  return(
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={[styles.box,styles.blueBox] }/>
        <View style={[styles.box,styles.redBox]}/>
        <View style={[styles.box,styles.greenBox]}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
  },
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: 'grey'
  },
  box:{
    borderWidth: 5,
    borderColor: '#333',
    width: 100,
    height: 100
  },
  blueBox:{
    backgroundColor: 'blue',
  },
  redBox:{
    backgroundColor: 'red',
    alignSelf:"center",
    top:50
  },
  greenBox:{
    backgroundColor: 'green',
  },
});
