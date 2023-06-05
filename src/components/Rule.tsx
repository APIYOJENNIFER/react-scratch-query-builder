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
  onOperatorChange: (event: string, id: string) => void;
  onValueChange: (event: string, id: string) => void;
  onDelete: () => void;
}
const Rule = ({ ...props }: RuleProps) => (
  <>
    {props.rules.map((item) => (
      <RuleItem
        key={item.id}
        onFieldChange={(event) => props.onFieldChange(event, item.id)}
        onOperatorChange={(event) => props.onOperatorChange(event, item.id)}
        onValueChange={(event) => props.onValueChange(event, item.id)}
        onDelete={props.onDelete}
        placeHolder={item.placeHolder}
        value={item.value}
      />
    ))}
  </>
);
export default Rule;
