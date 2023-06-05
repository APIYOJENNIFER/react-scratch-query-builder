import React from 'react';

interface ValueProps {
  placeHolder;
}
const Value = ({ ...props }: ValueProps) => (
  <input className="input-value" placeholder={props.placeHolder} />
);
export default Value;
