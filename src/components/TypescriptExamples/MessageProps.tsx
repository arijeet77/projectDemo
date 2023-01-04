import * as React from "react";

interface IMessageProps {
  text: string;
  important: boolean;
}

function MessageProps({ text, important }: IMessageProps) {
  return (
    <div>
      {important ? "Important message: " : "Regular message: "}
      {text}
    </div>
  );
}

export default MessageProps;
