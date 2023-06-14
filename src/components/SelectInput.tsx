import React from 'react';
import { levelGrades } from '../utils';

interface SelectInputProps {
  onValueChange(event: string): void;
}
const SelectInput: React.FunctionComponent<SelectInputProps> = ({
  ...props
}) => {
  const options = levelGrades.map((item) => <option key={item}>{item}</option>);

  return (
    <select
      className="select-level"
      onChange={(event) => props.onValueChange(event.target.value)}
    >
      {options}
    </select>
  );
};
export default SelectInput;
