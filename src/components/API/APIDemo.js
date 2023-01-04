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

  const buttonHandler = () => {
      const url = "https://date.nager.at/api/v3/PublicHolidays/";
      const newUrl = url + year + "/" + region;
      updateHolidaysAction(newUrl);
  };
  let nonDuplicatedHolidays = holidays?.filter(
    (element, index) =>
      index ===
      holidays.findIndex((ele) => ele.date === element.date)
  );

  return (
    <div>
      <center>
        <h1>Holidays Calender</h1>
      </center>
      <div className="divStyle">
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
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
      <br />
      <center>
        <button onClick={buttonHandler}>Get Public Holidays</button>
      </center>
      <br />
      <br />
      <div className="tableStyle">
        {holidays && (
          <table
            border="5"
            bordercolor="black"
            cellPadding={10}
            cellSpacing={5}
          >
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Local Name</th>
              </tr>
            </thead>
            <tbody>
              {nonDuplicatedHolidays.map((holiday, key) => (
                <tr key={key}>
                  <td>{holiday.date}</td>
                  <td>{holiday.name}</td>
                  <td>{holiday.localName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    holidays: state?.data,
})

const mapDispatchToProps = (dispatch) => {
    return {
      updateHolidaysAction: (param) => dispatch(updateHolidays(param)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(APIDemo);
