import React from 'react';
import { filterObject } from '../helper';
import { QueryObject, Rule } from '../types';

interface QueryProps {
  queryObject: QueryObject;
}
const QueryOutput: React.FunctionComponent<QueryProps> = ({ ...props }) => {
  const requiredFields = props.queryObject.rules.map((item) => {
    const {
      isValid,
      errorMessage,
      placeHolder,
      residentId,
      nonResidentId,
      ...newObject
    } = item;

    return newObject;
  });
  const object = filterObject(props.queryObject, requiredFields as Rule[]);

  return (
    <div>
      <h3 className="json">JSON</h3>
      <pre className="query-output">{JSON.stringify(object, null, 2)}</pre>
    </div>
  );
};
export default QueryOutput;
