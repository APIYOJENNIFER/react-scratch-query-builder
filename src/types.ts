interface Rule {
  id: string;
  field: string;
  operator: string;
  value: string | boolean;
  placeHolder: string;
  isValid: boolean;
  errorMessage: string;
  residentId: string;
  nonResidentId: string;
}

interface QueryObject {
  id: string;
  combinator: string;
  rules: Rule[];
}

interface RuleProps {
  rules: Rule[];
  onFieldChange: (event: string, id: string) => void;
  onOperatorChange: (event: string, id: string) => void;
  onValueChange: (event: string, id: string) => void;
  onDelete: (id: string) => void;
}

export { Rule, QueryObject, RuleProps };
