import React, { useState } from 'react';

interface RadioInputProps {
  onValueChange(event: string): void;
  id;
  residentId;
  nonResidentId;
}
const RadioInput = ({ ...props }: RadioInputProps) => {
  const [selected, setSelected] = useState('Resident');

  const handleChange = (event) => {
    props.onValueChange(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <>
      <label htmlFor={props.residentId}>
        <input
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
