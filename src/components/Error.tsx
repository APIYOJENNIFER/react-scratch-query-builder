import React from 'react';

interface ErrorProps {
  isValid;
  errorMessage;
}
const Error = ({ ...props }: ErrorProps) => (
  <>
    {!props.isValid && (
      <small className="error-output">{props.errorMessage}</small>
    )}
  </>
);
export default Error;
