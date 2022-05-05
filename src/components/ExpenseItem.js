import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card";
import React from "react";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <p>{props.title}</p>
        <h1 className="price-tag">${props.amount}</h1>
      </div>
    </Card>
  );
}

export default ExpenseItem;
