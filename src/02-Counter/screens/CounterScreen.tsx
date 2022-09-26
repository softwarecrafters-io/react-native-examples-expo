import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FloatingButton } from "../components/FloatingButton";

export const CounterScreen = () =>{
  const [counter, setCounter] = useState(0)
  return (<View style={styles.container}>
    <Text testID={"text-greet"} style={styles.title}>
      Counter: {counter}
    </Text>
    {/*<Button title={"Increase"} onPress={() => setCounter(counter + 1)}/>*/}
    <FloatingButton title={"+1"} position={'right'} onPress={() => setCounter(counter + 1)}/>
    <FloatingButton title={"-1"} position={'left'} onPress={() => setCounter(counter - 1)}/>
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center"
  },
  title:{
    fontSize: 45,
    textAlign: "center",
    top:-10
  },
});
