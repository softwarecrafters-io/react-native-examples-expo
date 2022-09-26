import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";



export const FlexBoxScreen = () => {

  return(
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[styles.box,styles.blueBox] }>Text 1</Text>
        <Text style={[styles.box,styles.redBox] }>Text 2</Text>
        <Text style={[styles.box,styles.greenBox] }>Text 3</Text>

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
    flex:1,
    backgroundColor: '#ccc',
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems: "flex-end"
  },
  box:{
    borderWidth: 2,
  },
  blueBox:{
    borderColor: 'blue',
    alignSelf: 'flex-start'
  },
  redBox:{
    borderColor: 'red',
  },
  greenBox:{

    borderColor: 'green',
  },
});
