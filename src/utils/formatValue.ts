const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumSignificantDigits:2 }).format(value); 

export default formatValue;
