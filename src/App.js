import React from "react";
import Dropdown from "./components/DropDown";
import Table from "./components/Table";
import "./App.css";
import Legends from "./components/Legends";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      winners: [],
      filter: { year: "All", category: "All" },
    };
  }

  componentDidMount() {
    fetch("https://api.nobelprize.org/v1/prize.json")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          winners: data.prizes.filter((item) => item.year < 2019),
        })
      );
  }

  handleYearChange = (year) => {
    const { filter } = this.state;
    filter.year = year;
    this.setState({ filter });
  };

  handleCategoryChange = (category) => {
    const { filter } = this.state;
    filter.category = category;
    this.setState({ filter });
  };

  render() {
    const { winners, filter } = this.state;
    const filteredWinners = winners
      .filter((item) => filter.year === "All" || item.year === filter.year)
      .filter(
        (item) => filter.category === "All" || item.category === filter.category
      );
    return (
      <div className="App">
        <h1>Nobel Prize Winners List</h1>
        <Legends />
        <Dropdown
          onYearChange={this.handleYearChange}
          onCategoryChange={this.handleCategoryChange}
        />
        <Table winners={filteredWinners} />
      </div>
    );
  }
}

export default App;
