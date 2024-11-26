import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main page (Main component) on /', () => {
  render(<App />);

  const mainElement = screen.getByText(/Wen Ting Song/i); 
  expect(mainElement).toBeInTheDocument();
});
