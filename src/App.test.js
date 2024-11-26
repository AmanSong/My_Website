import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main page (Main component) on /', () => {
  render(<App />);

  const matchingElements = screen.getAllByText(/Wen Ting Song/i);

  expect(matchingElements[0]).toBeInTheDocument();
});
