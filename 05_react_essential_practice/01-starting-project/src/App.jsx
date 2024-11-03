import { useState } from "react";

import InvestmentBoard from "./components/InvesmentBoard";
import InvesmentResult from "./components/InvesmentResult";

const INNITAL_INVESTMENT_INPUT = {
  initialInvestment: 15000,
  annualInvestment: 900,
  expectedReturn: 5.5,
  duration: 12
}

function App() {
  const [investmentParams, setInvestmentParams] = useState(INNITAL_INVESTMENT_INPUT);

  const handleUpdateInvestmentParams = (params) => {
    setInvestmentParams(prevInvestmentParams => {
      const updateInvestmentParams = { ...prevInvestmentParams };
      for (const key in params) {
        updateInvestmentParams[key] = Number(params[key]);
      }
      return updateInvestmentParams;
    })
  }

  return (
    <main>
      <InvestmentBoard
        investmentParams={investmentParams}
        onUpdateInvestmentParams={handleUpdateInvestmentParams} />
      <InvesmentResult investmentParams={investmentParams} />
    </main>
  )
}

export default App
