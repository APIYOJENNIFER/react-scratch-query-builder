import React from 'react';
import RadioInput from './RadioInput';
import SelectInput from './SelectInput';

interface ValueProps {
  onValueChange: (event: string) => void;
  placeHolder: string;
  value: string;
  field;
  id;
  residentId;
  nonResidentId;
}
const Value: React.FunctionComponent<ValueProps> = ({ ...props }) => {
  const input = () => {
    if (props.field === 'Housing') {
      return (
        <RadioInput
          onValueChange={props.onValueChange}
          id={props.id}
          residentId={props.residentId}
          nonResidentId={props.nonResidentId}
        />
      );
    }
    if (props.field === 'Level') {
      return <SelectInput onValueChange={props.onValueChange} />;
    }

    return (
      <input
        className="input-value"
        value={props.value}
        placeholder={props.placeHolder}
        onChange={(event) => props.onValueChange(event.target.value)}
      />
    );
  };

  return <>{input()}</>;
};

export default Value;
