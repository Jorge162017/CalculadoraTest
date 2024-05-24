import { render, screen } from '@testing-library/react';
import Display from './Display';

describe('Display Component', () => {
  it('renders the display with the correct value', () => {
    render(<Display value="123" />);
    expect(screen.getByDisplayValue('123')).toBeInTheDocument();
  });

  it('renders an empty display correctly', () => {
    render(<Display value="" />);
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('renders a zero correctly', () => {
    render(<Display value="0" />);
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
  });
});