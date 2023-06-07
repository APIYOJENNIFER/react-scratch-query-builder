import React from 'react';
import Operator from './Operator';
import GeneralButton from './GeneralButton';
import Field from './Field';
import Value from './Value';
import Error from './Error';

interface RuleItemProps {
  onFieldChange: (event: string) => void;
  onOperatorChange: (event: string) => void;
  onValueChange: (event: string) => void;
  onDelete: () => void;
  placeHolder: string;
  value: string;
  isValid: boolean;
  errorMessage: string;
  field;
  id;
  residentId;
  nonResidentId;
}
const RuleItem: React.FunctionComponent<RuleItemProps> = ({ ...props }) => (
  <div className="rule-item">
    <Field onFieldChange={props.onFieldChange} />
    <Operator onOperatorChange={props.onOperatorChange} />
    <div className="div-input-error">
      <div>
        <Value
          placeHolder={props.placeHolder}
          onValueChange={props.onValueChange}
          value={props.value}
          field={props.field}
          id={props.id}
          residentId={props.residentId}
          nonResidentId={props.nonResidentId}
        />
        <GeneralButton
          className="btn-delete-rule"
          buttonText="DELETE"
          onClick={props.onDelete}
        />
      </div>
      <Error isValid={props.isValid} errorMessage={props.errorMessage} />
    </div>
  </div>
);

export default RuleItem;
