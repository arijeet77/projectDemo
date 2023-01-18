import RegistrationForm from "./RegistrationForm";
import RegistrationDetails from "./RegistrationDetails";
import React, { useState } from "react";
import "./Registration.css"

const Registration = () => {
    const [data, setData] = useState([]);
    const [isEditing, setIsEditing] = useState(true);

  const addDetailsHandler = (formData) => {
    const values = [...data];
    values.push(formData);
      setData(values);
      setIsEditing(false);
    };
    
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    return (
      <div>
        <div className="registration">
          {!isEditing && (
            <button onClick={startEditingHandler}>Click to Register</button>
          )}
          {isEditing && <RegistrationForm onAdding={addDetailsHandler} />}
          <br />
            </div>
            {!isEditing && <RegistrationDetails displayData={data}/>}
      </div>
    );
};
export default Registration;
