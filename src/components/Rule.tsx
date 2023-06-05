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
  onFieldChange: (event: string, id: string) => void;
  onDelete: () => void;
}
const Rule = ({ ...props }: RuleProps) => (
  <>
    {props.rules.map((item) => (
      <RuleItem
        key={item.id}
        onFieldChange={(event) => props.onFieldChange(event, item.id)}
        onDelete={props.onDelete}
        placeHolder={item.placeHolder}
      />
    ))}
  </>
);
export default Rule;
