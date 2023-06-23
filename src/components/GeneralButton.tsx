import React from 'react';

interface ButtonProps {
  className: string;
  buttonText: string;
  onClick: () => void;
}

const GeneralButton: React.FunctionComponent<ButtonProps> = ({ ...props }) => (
  <button
    data-testid="general-button"
    className={props.className}
    type="button"
    onClick={props.onClick}
  >
    {props.buttonText}
  </button>
);

export default GeneralButton;
