import React from 'react';

interface CheckboxInputProps {
  onValueChange(event: string | boolean): void;
}
const CheckboxInput: React.FunctionComponent<CheckboxInputProps> = ({
  ...props
}) => (
  <input
    type="checkbox"
    onChange={(event) => props.onValueChange(event.target.checked)}
  />
);
export default CheckboxInput;
