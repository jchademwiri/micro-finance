import CurrencyRow from './CurrencyRow';
import { useEffect, useState } from 'react';

import './Currency.css';

const BASE_URL =
	'http://api.exchangeratesapi.io/v1/latest?access_key=2b2384ef4ea1dc5469de6e4ed631e161';

// const BASE_URL =
// 	'http://api.exchangeratesapi.io/v1/latest?access_key=2b2384ef4ea1dc5469de6e4ed631e161&symbols=USD,AUD,CAD,PLN,ZAR,MXN&format=1';

const Currency = () => {
	const [currencyOptions, setCurrencyOptions] = useState([]);
	const [fromCurrency, setFromCurrency] = useState();
	const [toCurrency, setToCurrency] = useState();
	const [exchangeRate, setExchangeRate] = useState();
	const [amount, setAmount] = useState(1);
	const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

	let toAmount, fromAmount;
	if (amountInFromCurrency) {
		fromAmount = amount;
		toAmount = amount * exchangeRate;
	} else {
		toAmount = amount;
		fromAmount = amount / exchangeRate;
	}

	console.log(exchangeRate);

	useEffect(() => {
		fetch(BASE_URL)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.rates);
				const firstCurrency = Object.keys(data.rates)[0];
				const secondCurrency = Object.keys(data.rates)[1];
				setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
				setFromCurrency(firstCurrency);
				setToCurrency(secondCurrency);
				setExchangeRate(data.rates[secondCurrency]);
			});
	}, []);

	useEffect(() => {
		if (fromCurrency != null && toCurrency != null) {
			fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
				.then((res) => res.json())
				.then((data) => setExchangeRate(data.rates[toCurrency]));
		}
	}, [fromCurrency, toCurrency]);

	function handleFromAmountChange(e) {
		setAmount(e.target.value);
		setAmountInFromCurrency(true);
	}

	function handleToAmountChange(e) {
		setAmount(e.target.value);
		setAmountInFromCurrency(false);
	}

	return (
		<div className='exchange_container'>
			<small>Today's Exchange Rate</small>
			<p>{/* {fromAmount} {fromCurrency} = {toAmount} {toCurrency} */}</p>
			<CurrencyRow
				currencyOptions={currencyOptions}
				selectedCurrrency={fromCurrency}
				onChangeCurrency={(e) => setFromCurrency(e.target.value)}
				onChangeAmount={handleFromAmountChange}
				amount={fromAmount}
			/>
			<div className='equals'>=</div>

			<CurrencyRow
				currencyOptions={currencyOptions}
				selectedCurrrency={toCurrency}
				onChangeCurrency={(e) => setToCurrency(e.target.value)}
				onChangeAmount={handleToAmountChange}
				amount={toAmount}
			/>
		</div>
	);
};
export default Currency;
