import React from 'react';
import { render } from '@testing-library/react';
import TopBar from './TopBar.ja';

test('renders correct title text', () => {
  const { getByText } = render(<TopBar />);
  const linkElement = getByText(/github user search/i);
  expect(linkElement).toBeInTheDocument();
});
