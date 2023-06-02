import React, { useState } from "react";
import { nanoid } from "nanoid";
import Logical from "./Logical";
import GeneralButton from "./GeneralButton";

const Query = () => {
  const [queryObject, setQueryObject] = useState({
    id: nanoid(),
    combinator: "AND",
    rules: [],
  });

  const handleLogicalChange = (logical) => {
    setQueryObject({ ...queryObject, combinator: logical });
  };

  return (
    <div className="App">
      <div className="App-heading">
        <h2>React Query Builder - TypeScript</h2>
      </div>
      <hr />
      <div className="App-top-section">
        <Logical onLogicalChange={(event) => handleLogicalChange(event)} />
        <GeneralButton className="btn-add-rule" buttonText="ADD RULE" />
      </div>
    </div>
  );
};

export default Query;
