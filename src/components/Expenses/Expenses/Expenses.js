import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filter, setFilter] = useState("");

  const filteredYear = (event) => {
    const selectedYear = event.target.value;
    console.log("selected:", selectedYear);

    setFilter(selectedYear);
  };
  if (filter !== "") {
    const filteredArray = props.expenses.filter(
      ({ date }) => date.getFullYear().toString() === filter
    );

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter filter={filter} setFilter={filteredYear} />
          <ExpensesChart filteredExpenses={filteredArray} />
          <ExpensesList filteredArray={filteredArray} />
        </Card>
      </div>
    );
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filter={filter} setFilter={filteredYear} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
