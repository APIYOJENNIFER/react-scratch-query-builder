import React from 'react';
import { filterObject } from '../helper';
import { QueryObject } from '../types';

interface QueryProps {
  queryObject: QueryObject;
}
const QueryOutput: React.FunctionComponent<QueryProps> = ({ ...props }) => {
  const object = filterObject(props.queryObject);

  return (
    <div>
      <h3 className="json">JSON</h3>
      <pre className="query-output">{JSON.stringify(object, null, 2)}</pre>
    </div>
  );
};
export default QueryOutput;
