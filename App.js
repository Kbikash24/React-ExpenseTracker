import ExpenseItem from'./components/ExpenseItem';

function App() {
  const expanses=[{
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),expenseLocation:'acf' 
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),expenseLocation:'acf' },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),expenseLocation:'acf'
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),expenseLocation:'acf'
  },];
  return (
    <div>
      <h2>Expense Item</h2>
      <ExpenseItem title={expanses[0].title}
                  amount={expanses[0].amount}
                  date={expanses[0].date} expenseLocation={expanses[0].expenseLocation}>
                   
                  </ExpenseItem>
                  <ExpenseItem title={expanses[1].title}
                  amount={expanses[1].amount}
                  date={expanses[1].date} expenseLocation={expanses[1].expenseLocation}></ExpenseItem>
                  <ExpenseItem title={expanses[2].title}
                  amount={expanses[2].amount}
                  date={expanses[2].date} expenseLocation={expanses[2].expenseLocation}></ExpenseItem>
      
      
      
    </div>
  );
}

export default App;
