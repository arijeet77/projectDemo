import React from "react";

const DetailsDisplay = (props) => {   

    return (
      <div className="bg">
        {props.showData &&
          props.showData.length > 0 &&
          props.showData.map((data) => (
            <div key={data.firstName}>
              <label>First Name: {data.firstName}</label><br />
              <label>Last Name: {data.lastName}</label><br />
              <label>Date of Birth: {data.dateOfBirth}</label><br /><br />
            </div>
          ))}
      </div>
    );

}

export default DetailsDisplay;