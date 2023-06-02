import React from 'react';
import Operator from './Operator';
import GeneralButton from './GeneralButton';
import Field from './Field';
import Value from './Value';

interface RuleItemProps {
  onDelete: () => void;
}
const RuleItem = ({ ...props }: RuleItemProps) => (
  <div className="rule-item">
    <Field />
    <Operator />
    <div className="div-input-error">
      <div>
        <Value />
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
