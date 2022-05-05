import React from "react";
import "./newExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../Card";

const NewExpense = (props) => {
  const submitExpense = (expense) => {
    const newExpense = {
      ...expense,
      key: Math.random().toString(),
    };
    props.onNewExpense(newExpense);
  };
  return (
    <Card className="expense-item__form">
      <ExpenseForm onSubmitExpense={submitExpense} />
    </Card>
  );
};

export default NewExpense;
