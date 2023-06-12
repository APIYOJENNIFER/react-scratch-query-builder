import React from 'react';
import { comparisonOperators } from '../utils';

interface OperatorProps {
  onOperatorChange: (event: string) => void;
  field: string;
  operator: string;
}
const Operator: React.FunctionComponent<OperatorProps> = ({ ...props }) => {
  const operatorList = comparisonOperators.map((item) =>
    props.field === 'Housing' ? (
      item === '=' && <option key={item}>{item}</option>
    ) : (
      <option key={item}>{item}</option>
    )
  );

  return (
    <select
      value={props.operator}
      className="select-comparison-operator"
      onChange={(event) => props.onOperatorChange(event.target.value)}
    >
      {operatorList}
    </select>
  );
};

export default Operator;
