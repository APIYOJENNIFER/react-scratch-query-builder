import React from 'react';
import { filterRule } from '../helper';
import { QueryObject } from '../types';

interface QueryProps {
  queryObject: QueryObject;
}
const QueryOutput: React.FunctionComponent<QueryProps> = ({ ...props }) => {
  const requiredKeys = ['id', 'field', 'operator', 'value'];

  const object = filterRule(props.queryObject, requiredKeys);

  return (
    <div>
      <h3 className="json">JSON</h3>
      <pre data-testid="query-output" className="query-output">
        {JSON.stringify(object, null, 2)}
      </pre>
    </div>
  );
};
export default QueryOutput;
