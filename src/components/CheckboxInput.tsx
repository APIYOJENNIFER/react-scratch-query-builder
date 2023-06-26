import React from 'react';

interface CheckboxInputProps {
  onValueChange(event: string | boolean): void;
  value: string | boolean;
}
const CheckboxInput: React.FunctionComponent<CheckboxInputProps> = ({
  ...props
}) => (
  <input
    data-testid="checkbox-input"
    type="checkbox"
    checked={props.value as boolean}
    onChange={(event) => props.onValueChange(event.target.checked)}
  />
);
export default CheckboxInput;
