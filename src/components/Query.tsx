import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Logical from './Logical';
import GeneralButton from './GeneralButton';
import {
  updateRulesList,
  changeInputPlaceHolder,
  validateInput,
  deleteRule,
} from '../helper';
import Rule from './Rule';
import { QueryObject } from '../types';

const Query: React.FunctionComponent = () => {
  const [queryObject, setQueryObject] = useState<QueryObject>({
    id: nanoid(),
    combinator: 'AND',
    rules: [],
  });

  const handleLogicalChange = (logical): void => {
    setQueryObject({ ...queryObject, combinator: logical });
  };

  const addRule = (): void => {
    const updatedRulesList = updateRulesList(queryObject);
    setQueryObject({ ...queryObject, rules: updatedRulesList });
  };

  const handleFieldChange = (field, idx): void => {
    const placeHolder = changeInputPlaceHolder(field);
    setQueryObject({
      ...queryObject,
      rules: queryObject.rules.map((rule) =>
        rule.id === idx
          ? {
              ...rule,
              field,
              isValid: true,
              errorMessage: '',
              value: '',
              placeHolder,
            }
          : rule
      ),
    });
  };

  const handleOperatorChange = (operator, idx): void => {
    setQueryObject({
      ...queryObject,
      rules: queryObject.rules.map((rule) =>
        rule.id === idx ? { ...rule, operator } : rule
      ),
    });
  };

  const handleValueChange = (value, idx): void => {
    const [isValid, errorMessage] = validateInput(queryObject, value, idx);
    setQueryObject({
      ...queryObject,
      rules: queryObject.rules.map((rule) =>
        rule.id === idx
          ? {
              ...rule,
              value,
              isValid,
              errorMessage,
            }
          : rule
      ),
    });
  };

  const handleDelete = (id): void => {
    const deleteResult = deleteRule(queryObject, id);

    setQueryObject({
      ...queryObject,
      rules: deleteResult,
    });
  };

  return (
    <div className="App">
      <div className="App-heading">
        <h2>React Query Builder - TypeScript</h2>
      </div>
      <hr />
      <div className="App-top-section">
        <Logical onLogicalChange={(event) => handleLogicalChange(event)} />
        <GeneralButton
          className="btn-add-rule"
          buttonText="ADD RULE"
          onClick={addRule}
        />
      </div>
      <div className="rules">
        <Rule
          rules={queryObject.rules}
          onFieldChange={handleFieldChange}
          onOperatorChange={handleOperatorChange}
          onValueChange={handleValueChange}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Query;
