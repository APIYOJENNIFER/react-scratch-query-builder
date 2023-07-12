import React = require('react');
import { render, screen, fireEvent } from '@testing-library/react';
import GeneralButton from '../GeneralButton';

describe('GeneralButton', () => {
  it('renders corrrectly and has buttonText', () => {
    const onClick = jest.fn();
    render(
      <GeneralButton
        testId="btn-general"
        className="test"
        buttonText="BUTTON TEXT"
        onClick={onClick}
      />
    );
    expect(screen.getByTestId('btn-general')).toBeInTheDocument();
    expect(screen.getByText(/BUTTON TEXT/)).toBeInTheDocument();
  });

  it('responds to clicks', () => {
    const onClick = jest.fn();
    render(
      <GeneralButton
        testId="btn-general"
        className="test"
        buttonText="test"
        onClick={onClick}
      />
    );

    fireEvent.click(screen.getByTestId('btn-general'));
    expect(onClick).toHaveBeenCalled();
  });
});
