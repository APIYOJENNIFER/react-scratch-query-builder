import React from 'react';
import Operator from './Operator';
import GeneralButton from './GeneralButton';
import Field from './Field';
import Value from './Value';

interface RuleItemProps {
  onFieldChange: (event: string) => void;
  onOperatorChange: (event: string) => void;
  onDelete: () => void;
  placeHolder: string;
}
const RuleItem = ({ ...props }: RuleItemProps) => (
  <div className="rule-item">
    <Field onFieldChange={props.onFieldChange} />
    <Operator onOperatorChange={props.onOperatorChange} />
    <div className="div-input-error">
      <div>
        <Value placeHolder={props.placeHolder} />
        <GeneralButton
          className="btn-delete-rule"
          buttonText="DELETE"
          onClick={props.onDelete}
        />
      </div>
    </div>
  </div>
);

export default RuleItem;
