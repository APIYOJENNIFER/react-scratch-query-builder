import React, { useState } from 'react';

interface RadioInputProps {
  onValueChange(event: string): void;
  id: string;
  residentId: string;
  nonResidentId: string;
}
const RadioInput = ({ ...props }: RadioInputProps) => {
  const [selected, setSelected] = useState('Resident');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onValueChange(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <>
      <label htmlFor={props.residentId} data-testid="resident-label">
        <input
          data-testid="resident"
          type="radio"
          name={props.id}
          value="Resident"
          checked={selected === 'Resident'}
          id={props.residentId}
          onChange={handleChange}
        />
        Resident
      </label>
      <label htmlFor={props.nonResidentId}>
        <input
          data-testid="non-resident"
          type="radio"
          name={props.id}
          value="Non-Resident"
          checked={selected === 'Non-Resident'}
          id={props.nonResidentId}
          onChange={handleChange}
        />
        Non-Resident
      </label>
    </>
  );
};

export default RadioInput;
