import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

export const BoxObjectModelScreen = () =>
  <SafeAreaView style={styles.parent}>
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model!</Text>
    </View>
  </SafeAreaView>

const styles = StyleSheet.create({
  parent:{
    flex:1,
    backgroundColor: 'grey',
  },
  container: {
    flex:1,
    backgroundColor: 'red',
  },
  title:{
    paddingHorizontal: 50,
    paddingVertical: 150,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: 'yellow',
    top:-10,
    borderWidth: 2,
    width: 200,
  },
});
