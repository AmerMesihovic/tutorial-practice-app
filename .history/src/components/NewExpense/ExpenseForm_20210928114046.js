import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({onSaveExpenseData}) => {
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnterTitle(event.target.value)
    };

    const amountChangeHandler = event => {
        setEnterAmount(event.target.value); 
    };

    const dateChangeHandler = event => {
        setEnterDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amnunt: enterAmount,
            date: new Date(enterDate),
        };

        onSaveExpenseData(enterTitle,enterAmount,enterDate);

        console.log(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');


    };

    return <form onSubmit={submitHandler} >
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' 
                value={enterTitle} 
                onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' 
                min="0.01" step='0.01' 
                value={enterAmount} 
                onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' 
                min='2019-01-01' 
                max='2022-12-31' 
                value={enterDate} 
                onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>

    </form>
};

export default ExpenseForm;