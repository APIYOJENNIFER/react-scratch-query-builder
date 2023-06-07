import React from 'react';

interface ErrorProps {
  isValid: boolean;
  errorMessage: string;
}
const Error: React.FunctionComponent<ErrorProps> = ({ ...props }) => (
  <>
    {!props.isValid && (
      <small className="error-output">{props.errorMessage}</small>
    )}
  </>
);
export default Error;
