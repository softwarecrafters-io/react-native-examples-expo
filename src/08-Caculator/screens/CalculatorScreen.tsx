import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Calculator, rangeIterator } from "../core/calculator";
import { useCalculator } from "../hooks/UseCalculator";

enum BackgroundColor {
  orange = '#FF9427',
  ligthGray = '#9b9b9b',
  darkGray = '#2D2D2D'
}

export const CalculatorScreen = () => {
  const {
    calculator, canRenderPrevious, onReset, onPressNumber, onPressDecimalPoint, onSwitchPositiveNegative, onPressNumberZero, onDeleteLastNumber, onCalculate, onAdd, onSubtract, onMultiply, onDivide
  } = useCalculator(Calculator.createDefault())
  const generateButtonRange = (from:number, to:number) => [...rangeIterator(from, to)]
    .map(n => <Button testID={n.toString()} key={n} text={n.toString()} onPress={() => onPressNumber(n.toString())} />);

  return(
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="black" //it is only for android
        barStyle='light-content' //it is for ios
      ></StatusBar>
      <View style={styles.container}>
        {(canRenderPrevious() && <Text style={styles.previousResult}>{calculator.previousValue}</Text>)}
        <Text testID={'result'} style={styles.result} numberOfLines={1} adjustsFontSizeToFit>{calculator.value}</Text>
        <View key={'row0'} style={styles.row}>
          <Button testID={"C"} text={"C"} onPress={onReset} backgroundColor={BackgroundColor.ligthGray} />
          <Button testID={"+/-"} text={"+/-"} onPress={onSwitchPositiveNegative} backgroundColor={BackgroundColor.ligthGray}/>
          <Button testID={"del"} text={"del"} onPress={onDeleteLastNumber} backgroundColor={BackgroundColor.ligthGray}/>
          <Button testID={"/"} text={"/"} onPress={onDivide} backgroundColor={BackgroundColor.orange}/>
        </View>
        <View style={styles.row}>
          {generateButtonRange(7,9)}
          <Button testID={"x"} text={"x"} onPress={onMultiply} backgroundColor={BackgroundColor.orange} />
        </View>
        <View style={styles.row}>
          {generateButtonRange(4,6)}
          <Button testID={"-"} text={"-"} onPress={onSubtract} backgroundColor={BackgroundColor.orange} />
        </View>
        <View style={styles.row}>
          {generateButtonRange(1,3)}
          <Button testID={"+"} text={"+"} onPress={onAdd} backgroundColor={BackgroundColor.orange} />
        </View>
        <View  style={styles.row}>
          <Button testID={"0"} text={"0"} hasDoubleSize onPress={onPressNumberZero}/>
          <Button testID={"."} text={"."} onPress={onPressDecimalPoint}/>
          <Button testID={"="} text={"="} onPress={onCalculate} backgroundColor={BackgroundColor.orange}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

interface ButtonProps {
  text:string,
  testID: string,
  onPress?: ()=>void,
  backgroundColor?:BackgroundColor,
  hasDoubleSize?:boolean
}

const Button = ({ text,testID, onPress, backgroundColor = BackgroundColor.darkGray, hasDoubleSize = false }:ButtonProps) => {
  const color = backgroundColor === BackgroundColor.ligthGray ? 'black' : 'white';
  const width = hasDoubleSize ? styles.buttonDouble.width : styles.button.width

  return <TouchableOpacity testID={testID} onPress={onPress}>
    <View style={{ ...styles.button, backgroundColor, width }}>
      <Text style={{...styles.textButton, color}}>{text}</Text>
    </View>
  </TouchableOpacity>
}


const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    backgroundColor:'black',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal:20,
  },
  previousResult:{
    color:'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: "right"
  },
  result:{
    color:'white',
    fontSize: 60,
    textAlign: "right",
    marginBottom: 10
  },
  row: {
    flexDirection:'row',
    justifyContent: 'center',
    marginBottom: 14,
  },
  button:{
    height: 80,
    width: 80,
    backgroundColor:BackgroundColor.ligthGray,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal:6,
  },
  buttonDouble:{
    width: 170,
  },
  textButton:{
    textAlign:'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '300'
  },
});
