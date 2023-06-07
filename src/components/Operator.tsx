import React from 'react';
import { comparisonOperators } from '../utils';

interface OperatorProps {
  onOperatorChange: (event: string) => void;
}
const Operator: React.FunctionComponent<OperatorProps> = ({ ...props }) => {
  const operatorList = comparisonOperators.map((item) => (
    <option key={item}>{item}</option>
  ));

  return (
    <select
      className="select-comparison-operator"
      onChange={(event) => props.onOperatorChange(event.target.value)}
    >
      {operatorList}
    </select>
  );
};

export default Operator;
