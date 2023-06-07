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
  onDelete: (id: string) => void;
}
const Rule: React.FunctionComponent<RuleProps> = ({ ...props }) => (
  <>
    {props.rules.map((item) => (
      <RuleItem
        key={item.id}
        onFieldChange={(event) => props.onFieldChange(event, item.id)}
        onOperatorChange={(event) => props.onOperatorChange(event, item.id)}
        onValueChange={(event) => props.onValueChange(event, item.id)}
        onDelete={() => props.onDelete(item.id)}
        placeHolder={item.placeHolder}
        value={item.value}
        isValid={item.isValid}
        errorMessage={item.errorMessage}
      />
    ))}
  </>
);
export default Rule;
