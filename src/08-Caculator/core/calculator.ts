export function* rangeIterator(from: number, to: number) {
  while (from <= to) {
    yield from++;
  }
}

export enum ArithmeticOperation {
  Add, Subtract, Multiply, Divide
}

export class Calculator {
  private static readonly zero = "0";
  private static readonly negativeZero = "-0";
  private static readonly decimalPoint = ".";
  private static readonly negativeSymbol = "-";

  constructor(readonly value: string, readonly previousValue: string, readonly operation: ArithmeticOperation) {
  }

  static create(value: string, previous: string, operation: ArithmeticOperation) {
    return new Calculator(value, previous, operation);
  }

  static createDefault() {
    return new Calculator(Calculator.zero, Calculator.zero, ArithmeticOperation.Add);
  }

  addNumber(value: string) {
    if (this.value.includes(Calculator.decimalPoint)) {
      return Calculator.create(this.value.concat(value), this.previousValue, this.operation);
    }
    if (this.value.startsWith(Calculator.zero)) {
      return Calculator.create(value, this.previousValue, this.operation);
    }
    if (this.value.startsWith(Calculator.negativeZero)) {
      return Calculator.create(Calculator.negativeSymbol.concat(value), this.previousValue, this.operation);
    }
    return Calculator.create(this.value.concat(value), this.previousValue, this.operation);
  }

  addNumberZero() {
    const isZero = this.value.startsWith(Calculator.zero) || this.value.startsWith(Calculator.negativeZero);
    const canAppendZero = this.value.includes(Calculator.decimalPoint) || !isZero;
    return canAppendZero
      ? Calculator.create(this.value.concat(Calculator.zero), this.previousValue, this.operation)
      : this;
  }

  addDecimalPoint() {
    const canAddDecimalPoint = this.value.split(Calculator.decimalPoint).length <= 1;
    return canAddDecimalPoint
      ? Calculator.create(this.value.concat(Calculator.decimalPoint), this.previousValue, this.operation)
      : this;
  }

  switchPositiveNegative() {
    return this.value.includes(Calculator.negativeSymbol)
      ? Calculator.create(this.value.replace(Calculator.negativeSymbol, ""), this.previousValue, this.operation)
      : Calculator.create(Calculator.negativeSymbol.concat(this.value), this.previousValue, this.operation);
  }

  reset() {
    return Calculator.create(Calculator.zero, this.previousValue, this.operation);
  }

  deleteLastNumber() {
    const shallBeZeroWhenLastNumber = this.value.length <= 1 || (this.value.includes(Calculator.negativeSymbol) && this.value.length == 2);
    if (shallBeZeroWhenLastNumber)
      return Calculator.create(Calculator.zero, this.previousValue, this.operation);
    return Calculator.create(this.value.slice(0, -1), this.previousValue, this.operation);
  }

  calculate() {
    const { parsedCurrent, parsedPrevious } = this.parseNumbers();
    switch (this.operation) {
      case ArithmeticOperation.Add:
        return this.add(parsedCurrent, parsedPrevious);
      case ArithmeticOperation.Subtract:
        return this.subtract(parsedCurrent, parsedPrevious);
      case ArithmeticOperation.Multiply:
        return this.multiply(parsedCurrent, parsedPrevious);
      case ArithmeticOperation.Divide:
        return this.divide(parsedCurrent, parsedPrevious);
    }
  }

  private add(parsedCurrent: number, parsedPrevious: number) {
    return Calculator.create(`${parsedPrevious + parsedCurrent}`, Calculator.zero, this.operation);
  }

  private subtract(parsedCurrent: number, parsedPrevious: number) {
    return Calculator.create(`${parsedPrevious - parsedCurrent}`, Calculator.zero, this.operation);
  }

  private multiply(parsedCurrent: number, parsedPrevious: number) {
    return Calculator.create(`${parsedPrevious * parsedCurrent}`, Calculator.zero, this.operation);
  }

  private divide(parsedCurrent: number, parsedPrevious: number) {
    return Calculator.create(`${parsedPrevious / parsedCurrent}`, Calculator.zero, this.operation);
  }

  updateOperation(operation: ArithmeticOperation) {
    let calculator = this.nextValues();
    return Calculator.create(calculator.value, calculator.previousValue, operation);
  }

  private nextValues() {
    return this.value.endsWith(Calculator.decimalPoint)
      ? Calculator.create(Calculator.zero, this.value.slice(0, -1), this.operation)
      : Calculator.create(Calculator.zero, this.value, this.operation);
  }

  private parseNumbers() {
    const parsedCurrent = Number(this.value);
    const parsedPrevious = Number(this.previousValue);
    return { parsedCurrent, parsedPrevious };
  }
}
