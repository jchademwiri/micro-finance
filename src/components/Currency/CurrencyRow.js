import './Currency.css';

const CurrencyRow = (props) => {
	const {
		currencyOptions,
		selectedCurrrency,
		onChangeCurrency,
		onChangeAmount,
		amount,
	} = props;
	return (
		<div className='container__row'>
			<input
				type='number'
				className='input'
				value={amount}
				onChange={onChangeAmount}
			/>

			<select
				name='currency'
				id='currency'
				value={selectedCurrrency}
				onChange={onChangeCurrency}
			>
				{currencyOptions.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default CurrencyRow;
