import { connect } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { updateHolidays } from "./APIActions";
import "./APIDemo.css"

const APIDemo = ({ holidays, updateHolidaysAction }) => {
  const years = ["2010", "2011", "2012", "2013", "2014", "2015", "2023"];
  const [region, setRegion] = useState("");
  const [year, setYear] = useState("");

  const regionHandler = (event) => {
    setRegion(event.target.value);
  };

  const yearHandler = (event) => {
    setYear(event.target.value);
  };

  const buttonHandler = async() => {
      const url = "https://date.nager.at/api/v3/PublicHolidays/";
      const newUrl = url + year + "/" + region;
      let newData = [];
      const result = await axios.get(newUrl);
      newData = result.data;
      updateHolidaysAction(newData);
  };

  return (
    <div>
      <h1>Hello</h1>
      <label>Region: </label>
      <select name="region" onChange={regionHandler}>
        <option className="optionStyle">Choose a Region</option>
        <option value="AT">AT</option>
        <option value="US">US</option>
      </select>
      <br />
      <label>Year: </label>
      <select name="year" onChange={yearHandler}>
        <option className="optionStyle">Choose Year</option>
        {years.map((y) => (
          <option value={y}>{y}</option>
        ))}
      </select>
      <br />
          <button onClick={buttonHandler}>Get Public Holidays</button>
      <br />
      <br />
      <table border="5" bordercolor="black">
        <tr>
            <th>Date</th>
            <th>Name</th>
        </tr>
        {
          holidays.map(holiday => 
            <tr>
              <td>{holiday.date}</td>
              <td>{holiday.name}</td>
            </tr>
          )
        }
    </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
    holidays: state.data,
})

const mapDispatchToProps = (dispatch) => {
    return {
      updateHolidaysAction: (param) => dispatch(updateHolidays(param)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(APIDemo);
