import React from 'react';
import { studentsField } from '../utils';

interface FieldProps {
  onFieldChange: (event: string) => void;
}
const Field = ({ ...props }: FieldProps) => {
  const fieldList = studentsField.map((item) => (
    <option key={item}>{item}</option>
  ));

  return (
    <select
      className="select-student-info"
      onChange={(event) => props.onFieldChange(event.target.value)}
    >
      {fieldList}
    </select>
  );
};

export default Field;
