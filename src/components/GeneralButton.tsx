import React from 'react';

interface ButtonProps {
  className: string;
  buttonText: string;
  onClick: () => void;
}

const GeneralButton = ({ ...props }: ButtonProps) => (
  <button className={props.className} type="button" onClick={props.onClick}>
    {props.buttonText}
  </button>
);

export default GeneralButton;
