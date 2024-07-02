export const formatNumberToCurrencyString = (number: number,_toFixed=2,_currency='USD'): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: _currency,
      minimumFractionDigits:_toFixed,
    }).format(number);
  };