import React from 'react';

interface ErrorProps {
  isValid: boolean;
  errorMessage: string;
}
const Error = ({ ...props }: ErrorProps) => (
  <>
    {!props.isValid && (
      <small className="error-output">{props.errorMessage}</small>
    )}
  </>
);
export default Error;
