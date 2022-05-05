import "./expenseDate.css";
import Card from "./UI/Card";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const date = props.date.getDate();
  return (
    <Card className="date">
      <div className="month">{month}</div>
      <div>{year}</div>
      <div>{date}</div>
    </Card>
  );
}

export default ExpenseDate;
