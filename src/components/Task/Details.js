import { useState } from "react";
import './Details.css';

const Details = (props) => {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");

  const fnameChangeHandler = (event) => {
    setFname(event.target.value);
  }
  
  const lnameChangeHandler = (event) => {
    setLname(event.target.value);
  };

  const dobChangeHandler = (event) => {
    setDob(event.target.value);
  };

  const buttonHandler = (event) => {
    props.onAdding({
      firstName: fname,
      lastName: lname,
      dateOfBirth: dob,
    });
    setFname('');
    setLname('');
    setDob('');
  }
    
  return (
    <div className="bg">
      <form className="formDetails">
        <div>
          <h2 className="htag">Form details</h2>
        </div>
        <div>
          <label>First Name </label>
          <input
            type="text"
            value={fname}
            onChange={fnameChangeHandler}
          ></input>
        </div>
        <br />
        <div>
          <label>Last Name </label>
          <input
            type="text"
            value={lname}
            onChange={lnameChangeHandler}
          ></input>
        </div>
        <br />
        <div>
          <label>Date of Birth </label>
          <input type="date" value={dob} onChange={dobChangeHandler}></input>
        </div>
        <br />
        <button type="button" onClick={buttonHandler}>Add</button>
        <br/>
      </form><br />
      </div>
    );
}

export default Details;