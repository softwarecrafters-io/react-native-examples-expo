import { useState } from "react";
import { ArithmeticOperation, Calculator } from "../core/calculator";

export const useCalculator = (initialCalculator:Calculator) => {
  const [calculator, updateCalculator] = useState(initialCalculator);
  const canRenderPrevious = () =>
    calculator.previousValue !== "0";

  const onReset = () =>
    updateCalculator(Calculator.createDefault());

  const onPressNumber = (value: string) =>
    updateCalculator(calculator.addNumber(value));

  const onPressDecimalPoint = () =>
    updateCalculator(calculator.addDecimalPoint());

  const onPressNumberZero = () =>
    updateCalculator(calculator.addNumberZero());

  const onSwitchPositiveNegative = () =>
    updateCalculator(calculator.switchPositiveNegative());

  const onDeleteLastNumber = () =>
    updateCalculator(calculator.deleteLastNumber());

  const onCalculate = () =>
    updateCalculator(calculator.calculate());

  const onAdd = () =>
    updateCalculator(calculator.updateOperation(ArithmeticOperation.Add));

  const onSubtract = () =>
    updateCalculator(calculator.updateOperation(ArithmeticOperation.Subtract));

  const onMultiply = () =>
    updateCalculator(calculator.updateOperation(ArithmeticOperation.Multiply));

  const onDivide = () =>
    updateCalculator(calculator.updateOperation(ArithmeticOperation.Divide));

  return {
    calculator,
    canRenderPrevious,
    onReset,
    onPressNumber,
    onPressDecimalPoint,
    onSwitchPositiveNegative,
    onPressNumberZero,
    onDeleteLastNumber,
    onCalculate,
    onAdd,
    onSubtract,
    onMultiply,
    onDivide,
  };
};
