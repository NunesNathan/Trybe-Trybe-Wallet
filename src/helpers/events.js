import { formatPrice } from './allies';

export function getElemValue() {
  return document.querySelector('#total-field');
}

export function initialValue() {
  const values = document.getElementsByClassName('value');
  const arr = [];

  if (values.length > 0) {
    for (let index = 0; index < values.length; index += 1) {
      arr.push(Number(values[index].innerHTML));
    }
    const result = arr.reduce((a, b) => a + b);
    return result;
  }
  return 0;
}

export function overrideValue(newValue = 0) {
  const value = getElemValue();
  value.innerHTML = Number(newValue);
}

export function getValue() {
  const valueNum = getElemValue().innerHTML;
  return Number(valueNum);
}

export function sumValue(toSum) {
  const valueNum = getValue();
  overrideValue(formatPrice(valueNum + Number(toSum)));
}

export function minusValue(toReduce) {
  const valueNum = getValue();
  overrideValue(formatPrice(valueNum - Number(toReduce)));
}
