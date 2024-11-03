import React from 'react';
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: '1',
      date: new Date(),
	    title: 'Car Insurance 1',
	    amount: 643.46
    },
    {
      id: '2',
      date: new Date(),
	    title: 'Car Insurance 2',
	    amount: 342.46
    },
    {
      id: '3',
      date: new Date(),
	    title: 'Car Insurance 3',
	    amount: 294.46
    },
    {
      id: '4',
      date: new Date(),
	    title: 'Car Insurance 4',
	    amount: 342.54
    },
  ]

  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Starting Project'),
    React.createElement(Expenses, { expenses })
  )

  // return (
  //   <div className='App'>
  //     <h1>Starting Project</h1>
  //     <Expenses expenses={expenses} />
  //   </div>
  // );
}

export default App;
