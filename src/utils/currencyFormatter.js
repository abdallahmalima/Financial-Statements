const currencyFormatter = (number) => number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export default currencyFormatter;
