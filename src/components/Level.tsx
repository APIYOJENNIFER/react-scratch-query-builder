import React from 'react';
import { levelGrades } from '../utils';

interface LevelProps {
  onValueChange(event: string): void;
}
const Level: React.FunctionComponent<LevelProps> = ({ ...props }) => {
  const options = levelGrades.map((item) => <option key={item}>{item}</option>);

  return (
    <select
      data-testid="level-select"
      className="select-level"
      onChange={(event) => props.onValueChange(event.target.value)}
    >
      {options}
    </select>
  );
};
export default Level;
