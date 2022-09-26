import { Text, View } from "react-native";
import React from "react";

export const HelloWorldScreen = () =>
  <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}>
    <Text testID={"text-greet"} style={{ fontSize: 45, textAlign: "center" }}>Hello World!</Text>
  </View>;
