import './Expenses.css';
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import React, { useEffect, useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }; 

    const filteredExpesnses = props.items.filter(expenses => {
        
    });
    
    console.log('props', props);
    
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {props.items.map((expenses) => (
                    <ExpenseItem
                        key={expenses.id}
                        title={expenses.title}
                        amount={expenses.amount}
                        date={expenses.date} 
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;