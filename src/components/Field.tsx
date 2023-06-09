import React from 'react';
import { studentsField } from '../utils';

interface FieldProps {
  onFieldChange: (event: string) => void;
}
const Field: React.FunctionComponent<FieldProps> = ({ ...props }) => {
  const fieldList = studentsField.map((item) => (
    <option key={item}>{item}</option>
  ));

  return (
    <select
      data-testid="field-select"
      className="select-student-info"
      onChange={(event) => props.onFieldChange(event.target.value)}
    >
      {fieldList}
    </select>
  );
};

export default Field;
