import React from 'react';
import RuleItem from './RuleItem';
import { RuleProps } from '../types';

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
        field={item.field}
        id={item.id}
        residentId={item.residentId}
        nonResidentId={item.nonResidentId}
        operator={item.operator}
      />
    ))}
  </>
);
export default Rule;
