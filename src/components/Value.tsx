import React from 'react';

interface ValueProps {
  onValueChange: (event: string) => void;
  placeHolder: string;
  value: string;
}
const Value: React.FunctionComponent<ValueProps> = ({ ...props }) => (
  <input
    className="input-value"
    value={props.value}
    placeholder={props.placeHolder}
    onChange={(event) => props.onValueChange(event.target.value)}
  />
);
export default Value;
