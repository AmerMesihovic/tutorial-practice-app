import ExpenseDate from './ExpenseDate';
import React, { useState } from 'react'
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evalueted by Amer'); 

    // let title = props.title;

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;