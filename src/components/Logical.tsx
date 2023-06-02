import React from "react";
import logicalOperators from "../utils";

interface LogicalProps {
  onLogicalChange: (logical: string) => void;
}

const Logical = ({ ...props }: LogicalProps) => {
  const logicalList = logicalOperators.map((item) => (
    <option key={item}>{item}</option>
  ));

  return (
    <select
      className="logical-select"
      onChange={(event) => props.onLogicalChange(event.target.value)}
    >
      {logicalList}
    </select>
  );
};

export default Logical;
