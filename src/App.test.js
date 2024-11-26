import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the main page (Main component) on /', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  // Check for something specific that Main renders
  const mainElement = screen.getByText(/Wen Ting Song/i); // Replace with actual content from Main
  expect(mainElement).toBeInTheDocument();
});
