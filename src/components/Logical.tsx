import React from 'react';
import { logicalOperators } from '../utils';

interface LogicalProps {
  onLogicalChange: (logical: string) => void;
}

const Logical: React.FunctionComponent<LogicalProps> = ({ ...props }) => {
  const logicalList = logicalOperators.map((item) => (
    <option data-testid={item} key={item}>
      {item}
    </option>
  ));

  return (
    <select
      data-testid="logical-select"
      className="logical-select"
      onChange={(event) => props.onLogicalChange(event.target.value)}
    >
      {logicalList}
    </select>
  );
};

export default Logical;
