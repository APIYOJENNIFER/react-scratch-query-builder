import React from 'react';

interface ButtonProps {
  className: string;
  buttonText: string;
  onClick: () => void;
  testId: string;
}

const GeneralButton: React.FunctionComponent<ButtonProps> = ({ ...props }) => (
  <button
    data-testid={props.testId}
    className={props.className}
    type="button"
    onClick={props.onClick}
  >
    {props.buttonText}
  </button>
);

export default GeneralButton;
