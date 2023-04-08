import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputField from './InputField';

describe('InputField component', () => {
  const defaultProps = {
    id: 'username',
    name: 'username',
    label: 'username',
    value: '',
    type: 'text',
    onChangeHandler: jest.fn(),
    error: null,
    touched: false,
    minInputLength: 5,
    min: 0,
  };

  

  it('renders the input element with the given props', () => {
    const { getByLabelText } = render(<InputField {...defaultProps} />);

    const input = getByLabelText('username');

    expect(input).toBeInTheDocument();
    expect(input.id).toBe('username');
    expect(input.name).toBe('username');
    expect(input.type).toBe('text');
    expect(input.required).toBeTruthy();
    expect(input.minLength).toBe(5);
    expect(input.value).toBe('');
  });

  it('calls the onChangeHandler function when the input value changes', () => {
    const { getByLabelText } = render(<InputField {...defaultProps} />);
    const input = getByLabelText('username');

    fireEvent.change(input, { target: { value: 'test' } });

    expect(defaultProps.onChangeHandler).toHaveBeenCalled();
  });

  it('renders an error message when the input value is too short', () => {
    const { getByLabelText, getByText } = render(<InputField {...defaultProps} value="foo" />);
    const input = getByLabelText('username');
    fireEvent.change(input, { target: { value: 'test' } });
    const error = getByText('username must be at least 5 characters long');
    expect(error).toBeInTheDocument();
  });
  

  it('renders an error message when there is an error and the input has been touched', () => {
    const { getByText } = render(<InputField {...defaultProps} error="Error message" touched={true} />);
    const error = getByText('Error message');

    expect(error).toBeInTheDocument();
  });
});
