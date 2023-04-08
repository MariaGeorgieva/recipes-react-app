import { render, fireEvent } from '@testing-library/react';
import { ButtonPrimary, ButtonPrimarySm } from './Buttons';

test('ButtonPrimary component renders with expected props and click handler works', () => {
  const handleClick = jest.fn();
  const buttonLabel = 'Click me!';
  const { getByText } = render(
    <ButtonPrimary value={buttonLabel} clickHandler={handleClick} />
  );
  const buttonElement = getByText(buttonLabel);
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('ButtonPrimarySm component renders with expected props and click handler works', () => {
  const handleClick = jest.fn();
  const buttonLabel = 'Click me!';
  const { getByText } = render(
    <ButtonPrimarySm value={buttonLabel} clickHandler={handleClick} />
  );
  const buttonElement = getByText(buttonLabel);
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
