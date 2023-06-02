import React from 'react';
import RuleItem from './RuleItem';

interface RuleProps {
  rules: {
    id: string;
    field: string;
    operator: string;
    value: string;
    placeHolder: string;
    isValid: boolean;
    errorMessage: string;
  }[];
  onDelete: () => void;
}
const Rule = ({ ...props }: RuleProps) => (
  <>
    {props.rules.map((item) => (
      <RuleItem key={item.id} onDelete={props.onDelete} />
    ))}
  </>
);
export default Rule;
