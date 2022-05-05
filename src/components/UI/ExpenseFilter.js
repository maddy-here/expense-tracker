import "./expenseFilter.css";
const ExpenseFilter = (props) => {
  const filterHandler = (event) => {
    props.onFilterByYear(event.target.value);
  };
  return (
    <div className="filter">
      <label className="filter-label">Filter by year</label>

      <select
        className="select"
        value={props.year}
        onChange={filterHandler}
        name="cars"
        id="cars"
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
      </select>
      <button
        onClick={() => props.onReset()}
        className="reset-button"
        type="button"
      >
        Reset
      </button>
    </div>
  );
};

export default ExpenseFilter;
