import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function InvesmentResult({ investmentParams }) {
	const annualData = calculateInvestmentResults({ ...investmentParams });

	return (
		<table id="result">
			<thead>
				<tr>
					<td>Year</td>
					<td>Invesment Value</td>
					<td>Interest (Year)</td>
					<td>Totla Interest</td>
					<td>Invested Capital</td>
				</tr>
			</thead>
			<tbody>
				{annualData.map(({ year, valueEndOfYear, interest, totalInterest, investedCapital }, index) => (
					<tr key={index}>
						<td>{year}</td>
						<td>{formatter.format(valueEndOfYear)}</td>
						<td>{formatter.format(interest)}</td>
						<td>{formatter.format(totalInterest)}</td>
						<td>{formatter.format(investedCapital)}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}