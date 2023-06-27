import React from 'react';
import RadioInput from './RadioInput';
import Level from './Level';
import CheckboxInput from './CheckboxInput';
import GeneralInput from './GeneralInput';

interface ValueInputProps {
  onValueChange: (event: string) => void;
  placeHolder: string;
  value: string | boolean;
  field: string;
  id: string;
  residentId: string;
  nonResidentId: string;
}
const ValueInput: React.FunctionComponent<ValueInputProps> = ({ ...props }) => {
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
      return <Level onValueChange={props.onValueChange} />;
    }

    if (props.field === 'Has Graduated') {
      return (
        <CheckboxInput
          onValueChange={props.onValueChange}
          value={props.value}
        />
      );
    }

    return (
      <GeneralInput
        onValueChange={props.onValueChange}
        value={props.value}
        placeHolder={props.placeHolder}
      />
    );
  };

  return <>{input()}</>;
};

export default ValueInput;
