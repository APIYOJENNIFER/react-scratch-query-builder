import React = require('react');
import { render, screen, fireEvent } from '@testing-library/react';
import GeneralButton from '../GeneralButton';

describe('GeneralButton', () => {
  it('renders corrrectly and has buttonText ADD RULE', () => {
    const onClick = jest.fn();
    render(
      <GeneralButton className="test" buttonText="ADD RULE" onClick={onClick} />
    );
    expect(screen.getByText(/ADD RULE/)).toBeInTheDocument();
  });

  it('renders corrrectly and has buttonText DELETE', () => {
    const onClick = jest.fn();
    render(
      <GeneralButton className="test" buttonText="DELETE" onClick={onClick} />
    );
    expect(screen.getByText(/DELETE/)).toBeInTheDocument();
  });

  it('responds to clicks', () => {
    const onClick = jest.fn();
    render(
      <GeneralButton className="test" buttonText="test" onClick={onClick} />
    );

    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
