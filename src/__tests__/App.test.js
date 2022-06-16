import { render, screen } from '@testing-library/react';
import App from '../App';
import Button from "../Button"
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("button color", () => {
  let color = "red"
  render(<Button color={ color }/>)

  const button = screen.getByRole('button')

  expect(button).toHaveAttribute("style", expect.stringContaining(`background-color: ${color};`))
})
