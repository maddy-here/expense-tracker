import React, { useState } from "react";
import "./expenseForm.css";

const ExpenseForm = (props) => {
  const randomHexColor = () => {
    // Generate a random 2 digit hex number, padded with a 0 if necessary
    const part = () =>
      Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0");
    const r = part();
    const g = part();
    const b = part();
    return `#${r}${g}${b}`;
  };
  const color = randomHexColor();
  const [randomColor, setRandomColor] = useState({ backgroundColor: color });
  const clickHandler = (e) => {
    e.preventDefault();
    setRandomColor({ backgroundColor: randomHexColor() });
    const expenseObject = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    if (
      expenseObject.title === "" ||
      expenseObject.date === "" ||
      expenseObject.amount <= 0
    )
      return;
    props.onSubmitExpense(expenseObject);
    setEneteredDate("");
    setEneteredTitle("");
    setEneteredAmount("");
  };
  const [enteredTitle, setEneteredTitle] = useState("");
  const [enteredAmount, setEneteredAmount] = useState("");
  const [enteredDate, setEneteredDate] = useState("");

  const titleHandler = (event) => {
    const value = event.target.value;
    setEneteredTitle(value);
  };
  const amountHandler = (event) => {
    const value = event.target.value;
    setEneteredAmount(value);
  };
  const dateHandler = (event) => {
    const value = event.target.value;
    setEneteredDate(value);
  };

  return (
    <form onSubmit={clickHandler} className="new-expense__form">
      <div className="input">
        {/* <label>Title</label> */}
        <input
          value={enteredTitle}
          onChange={titleHandler}
          placeholder="enter title"
          className="title-input"
          type="text"
        />
      </div>
      <div className="input">
        {/* <label>Amount</label> */}
        <input
          value={enteredAmount}
          onChange={amountHandler}
          placeholder="enter amount"
          type="number"
          min="0.01"
          step="0.01"
        />
      </div>
      <div className="input">
        <input
          value={enteredDate}
          onChange={dateHandler}
          className="date-input"
          type="date"
          min="2018-01-01"
          max="2022-12-31"
        />
        {/* <label>date</label> */}
      </div>
      <button style={randomColor} className="button-input" formAction="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
