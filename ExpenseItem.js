import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const deleteExpenseHandler = () => {
    //  the logic to delete the expense
    alert('Deleting expense...');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </Card>
  );
};

export default ExpenseItem;
