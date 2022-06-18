import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const [toggle, setToggle] = useState(true);

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      console.log(event.target.value);
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // default JS behavior

    const { enteredTitle, enteredAmount, enteredDate } = userInput;
    const dateParts = enteredDate.split("-");
    const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date,
    };

    console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  };

  return toggle ? (
    <button onClick={() => setToggle(false)}>Add New Expense</button>
  ) : (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-31-12"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={() => setToggle(true)}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
