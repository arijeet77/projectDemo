import "./RegistrationDetails.css";

const RegistrationDetails = (props) => {
  return (
      <div className="details"><br/>
      {props.displayData.length > 0 ? <h3>Details</h3> : ""}
      {props.displayData &&
        props.displayData.length > 0 &&
        props.displayData.map((data, key) => (
          <div key={key}>
            <table cellSpacing={10}>
              <tbody>
                <tr>
                  <td>First Name:</td>
                  <td>{data.firstName}</td>
                </tr>
                <tr>
                  <td>Last Name:</td>
                  <td>{data.lastName}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{data.email}</td>
                </tr>
              </tbody>
                </table>
                <br/>
          </div>
        ))}
    </div>
  );
};

export default RegistrationDetails;
