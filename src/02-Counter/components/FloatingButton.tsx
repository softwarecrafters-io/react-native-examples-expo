import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import React from "react";

interface FloatingButtonParams {
   title: string; onPress: () => void; position: "right" | "left" ;
}

export const FloatingButton = (props: FloatingButtonParams) =>
  Platform.OS === "android" ? FloatingButtonForAndroid(props) : FloatingButtonForIOS(props);

const FloatingButtonForAndroid = ({title, onPress, position}: FloatingButtonParams) => {
  const floatingPosition = position == "right" ? styles.floatingButtonRight : styles.floatingButtonLeft;
  return <View style={[styles.floatingButton, floatingPosition]}>
    <TouchableNativeFeedback  onPress={onPress} background={TouchableNativeFeedback.Ripple('white', false, 30)}>
      <View style={styles.floatingButtonView}>
        <Text style={styles.floatingButtonText}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  </View>
};

const FloatingButtonForIOS = ({title, onPress, position}: FloatingButtonParams) => {
  const floatingPosition = position == "right" ? styles.floatingButtonRight : styles.floatingButtonLeft;
  return <TouchableOpacity  onPress={onPress} style={[styles.floatingButton, floatingPosition]} activeOpacity={0.8}>
      <View style={styles.floatingButtonView}>
        <Text style={styles.floatingButtonText}>{title}</Text>
      </View>
    </TouchableOpacity>
};



const styles = StyleSheet.create({
  floatingButtonLeft:{
    left: 25
  },
  floatingButtonRight:{
    right: 25
  },
  floatingButton:{
    position:'absolute',
    bottom: 25,
  },
  floatingButtonView:{
    backgroundColor:'#5856D6',
    borderRadius:100,
    justifyContent:'center',
    height: 60,
    width: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
  floatingButtonText:{
    color:'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
})
