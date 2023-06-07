import React from 'react';
import RadioInput from './RadioInput';

interface ValueProps {
  onValueChange: (event: string) => void;
  placeHolder: string;
  value: string;
  field;
  id;
  residentId;
  nonResidentId;
}
const Value: React.FunctionComponent<ValueProps> = ({ ...props }) => (
  <>
    {props.field === 'Housing' ? (
      <RadioInput
        onValueChange={props.onValueChange}
        id={props.id}
        residentId={props.residentId}
        nonResidentId={props.nonResidentId}
      />
    ) : (
      <input
        className="input-value"
        value={props.value}
        placeholder={props.placeHolder}
        onChange={(event) => props.onValueChange(event.target.value)}
      />
    )}
  </>
);
export default Value;
