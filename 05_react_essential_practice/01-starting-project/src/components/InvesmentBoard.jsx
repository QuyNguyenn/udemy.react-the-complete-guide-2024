import InvestmentInput from "./InvestmentInput";

export default function InvestmentBoard({ investmentParams, onUpdateInvestmentParams }) {
	const { initialInvestment, annualInvestment, expectedReturn, duration } = investmentParams;

	const handleUpdateInputValue = (name, value) => {
		onUpdateInvestmentParams({ [name]: value });
	}

	return (
		<div id="user-input">
			<div className="input-group">
				<InvestmentInput
					label='INNITAL INVESTMENT'
					name='initialInvestment'
					value={initialInvestment}
					onValueChange={handleUpdateInputValue} />
				<InvestmentInput
					label='ANNUAL INVESTMENT'
					name='annualInvestment'
					value={annualInvestment}
					onValueChange={handleUpdateInputValue} />
			</div>
			<div className="input-group">
				<InvestmentInput
					label='EXPECTED RETURN'
					name='expectedReturn'
					value={expectedReturn}
					onValueChange={handleUpdateInputValue} />
				<InvestmentInput
					label='DURATION'
					name='duration'
					value={duration}
					onValueChange={handleUpdateInputValue} />
			</div>
		</div>
	)
}