import React, { useState } from 'react';

import ExpenseDate from "./ExpressDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (data) => {

  const [title, setTitle] = useState(data.title);

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={data.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{data.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title </button>
    </Card>
  );
}

export default ExpenseItem;
