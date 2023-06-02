import React from 'react';
import { comparisonOperators } from '../utils';

const Operator = () => {
  const operatorList = comparisonOperators.map((item) => (
    <option key={item}>{item}</option>
  ));

  return <select className="select-comparison-operator">{operatorList}</select>;
};

export default Operator;
