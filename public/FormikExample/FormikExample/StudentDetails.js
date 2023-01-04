const StudentDetails = (props) => {
  return (
    <div>
      {props.showData.length > 0 ? (
        <h2>Student Details</h2>
      ) : (
        <center>
          <h3>No Student Details Exist</h3>
        </center>
      )}
      {props.showData &&
        props.showData.length > 0 &&
        props.showData.map((data) => (
          <div>
            <label>First Name: {data.firstName}</label>
            <br />
            <label>Last Name: {data.lastName}</label>
            <br />
            <label>Email: {data.email}</label>
            <br />
            <label>Date of Birth: {data.dob}</label>
            <br />
            <label>Address:</label>
            <br />
            <label>Street: {data.street}</label>
            <br />
            <label>City: {data.city}</label>
            <br />
            <label>State: {data.state}</label>
            <br />
            <label>Pin Code: {data.pin}</label>
            <br />
            <hr />
          </div>
        ))}
    </div>
  );
};

export default StudentDetails;
