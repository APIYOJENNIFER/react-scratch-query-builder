import React = require('react');
import { render, screen, fireEvent } from '@testing-library/react';
import GeneralButton from '../GeneralButton';

describe('GeneralButton', () => {
  it('renders corrrectly and has buttonText', () => {
    const onClick = jest.fn();
    render(
      <GeneralButton
        className="test"
        buttonText="BUTTON TEXT"
        onClick={onClick}
      />
    );
    expect(screen.getByTestId('general-button')).toBeInTheDocument();
    expect(screen.getByText(/BUTTON TEXT/)).toBeInTheDocument();
  });

  it('responds to clicks', () => {
    const onClick = jest.fn();
    render(
      <GeneralButton className="test" buttonText="test" onClick={onClick} />
    );

    fireEvent.click(screen.getByTestId('general-button'));
    expect(onClick).toHaveBeenCalled();
  });
});
