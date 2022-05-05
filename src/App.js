import { useState } from "react/cjs/react.development";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/UI/Card";
import ExpenseFilter from "./components/UI/ExpenseFilter";
import NewExpense from "./components/UI/newExpense/NewExpense";
import Chart from "./components/expensesChart/Chart";
const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    date: new Date(2018, 3, 21),
    amount: 231.32,
  },
  {
    title: "Smartphone",
    date: new Date(2019, 4, 25),
    amount: 121.12,
  },
  {
    title: "Health Insurance",
    date: new Date(2021, 5, 20),
    amount: 290.32,
  },
  {
    title: "Laptop",
    date: new Date(2020, 9, 16),
    amount: 231.32,
  },
];

function App() {
  const expensesInfo = DUMMY_EXPENSES.map((expense) => {
    return {
      title: expense.title,
      date: new Date(expense.date),
      amount: expense.amount,
      key: Math.random().toString(),
    };
  });

  const [expenses, setExpenses] = useState(expensesInfo);
  const [filterExpenses, setFilterExpenses] = useState(expenses);
  const renderNewExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    setFilterExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const setFilterByYear = (filteredValue) => {
    setFilterExpenses(
      expenses.filter((ex) => {
        return ex.date.getFullYear() === +filteredValue;
      })
    );
  };
  const resetExpenses = () => {
    setFilterExpenses(expenses);
  };
  let content = <p className="no-content">Nothing Found</p>;
  if (filterExpenses.length > 0) {
    content = filterExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.key}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      );
    });
  }

  return (
    <Card className="container">
      {/* <Counter /> */}
      <NewExpense onNewExpense={renderNewExpense} />
      <ExpenseFilter onFilterByYear={setFilterByYear} onReset={resetExpenses} />
      <Chart expenses={filterExpenses} />
      {content}
    </Card>
  );
}

export default App;
