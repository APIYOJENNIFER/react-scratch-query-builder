import React, { useState } from 'react';

interface GeneralInputProps {
  onValueChange: (event: string) => void;
  value: string | boolean;
  placeHolder: string;
}
const GeneralInput: React.FunctionComponent<GeneralInputProps> = ({
  ...props
}) => {
  const [value, setValue] = useState(props.value as string);

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onValueChange(event.target.value);
  };

  return (
    <input
      data-testid="general-input"
      className="input-value"
      value={value}
      placeholder={props.placeHolder}
      onChange={(event) => handleOnchange(event)}
    />
  );
};
export default GeneralInput;
