import React from "react";

interface ButtonProps {
  className: string;
  buttonText: string;
}

const GeneralButton = ({ ...props }: ButtonProps) => (
    <button className={props.className} type="button">
      {props.buttonText}
    </button>
  );

export default GeneralButton;
