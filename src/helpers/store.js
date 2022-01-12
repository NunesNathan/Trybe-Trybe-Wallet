import { formatPrice } from './allies';

export function getElemValue() {
  return document.querySelector('#total-field');
}

export function getValue() {
  const value = getElemValue().innerHTML;
  return Number(value);
}

export function sumValue(toSum) {
  const valueNum = getValue();
  const value = getElemValue();
  value.innerHTML = formatPrice(valueNum + Number(toSum));
}
