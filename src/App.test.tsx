import ResizeObserver from 'resize-observer-polyfill';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  global.ResizeObserver = ResizeObserver;

  render(
    <App />,
  );
  const linkElement = screen.getByText(/^samdouble$/i);
  expect(linkElement).toBeInTheDocument();
});
