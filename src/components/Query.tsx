import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Logical from './Logical';
import GeneralButton from './GeneralButton';
import {
  updateRulesList,
  QueryObject,
  changeInputPlaceHolder,
} from '../helper';
import Rule from './Rule';

const Query = () => {
  const [queryObject, setQueryObject] = useState<QueryObject>({
    id: nanoid(),
    combinator: 'AND',
    rules: [],
  });

  const handleLogicalChange = (logical) => {
    setQueryObject({ ...queryObject, combinator: logical });
  };

  const addRule = () => {
    const updatedRulesList = updateRulesList(queryObject);
    setQueryObject({ ...queryObject, rules: updatedRulesList.updatedRules });
  };

  const handleFieldChange = (field, idx) => {
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

  const handleOperatorChange = (operator, idx) => {
    setQueryObject({
      ...queryObject,
      rules: queryObject.rules.map((rule) =>
        rule.id === idx ? { ...rule, operator } : rule
      ),
    });
  };

  const handleValueChange = (value, idx) => {
    setQueryObject({
      ...queryObject,
      rules: queryObject.rules.map((rule) =>
        rule.id === idx
          ? {
              ...rule,
              value,
            }
          : rule
      ),
    });
  };

  const handleDelete = () => {};

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
