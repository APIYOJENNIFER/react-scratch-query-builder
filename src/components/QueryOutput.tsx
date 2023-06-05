import React from 'react';
import { QueryObject, filterObject } from '../helper';

interface QueryProps {
  queryObject: QueryObject;
}
const QueryOutput = ({ ...props }: QueryProps) => {
  const object = filterObject(props.queryObject);

  return (
    <div>
      <h3 className="json">JSON</h3>
      <pre className="query-output">{JSON.stringify(object, null, 2)}</pre>
    </div>
  );
};
export default QueryOutput;
