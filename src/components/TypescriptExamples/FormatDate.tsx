import * as React from "react";


interface IFormatDateProps {
  date: Date;
}

function FormatDate({ date }: IFormatDateProps): JSX.Element {
  return (
    <div>
      {date.toLocaleString()}
    </div>);
}

export default FormatDate;