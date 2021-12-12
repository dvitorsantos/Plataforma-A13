import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';

test('Testing h1', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Salve/i);
  expect(linkElement).toBeInTheDocument();
});
