import { render, screen, fireEvent } from '@testing-library/react';
import ButtonPanel from './ButtonPanel';

describe('ButtonPanel Component', () => {
  const mockHandlers = {
    handleNumberClick: jest.fn(),
    handleOperatorClick: jest.fn(),
    handleClear: jest.fn(),
    handleToggleSign: jest.fn(),
    handlePercent: jest.fn(),
    handleEqual: jest.fn()
  };

  beforeEach(() => {
    // Reset the mocks before each test
    jest.clearAllMocks();
  });

  it('renders all number buttons correctly', () => {
    render(<ButtonPanel {...mockHandlers} />);
    
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach(number => {
      expect(screen.getByText(number)).toBeInTheDocument();
    });
  });

  it('renders all operator buttons correctly', () => {
    render(<ButtonPanel {...mockHandlers} />);
    
    ['AC', '+/-', '%', '/', '*', '-', '+', '='].forEach(operator => {
      expect(screen.getByText(operator)).toBeInTheDocument();
    });
  });

  it('handles number button clicks', () => {
    render(<ButtonPanel {...mockHandlers} />);
    
    fireEvent.click(screen.getByText('1'));
    expect(mockHandlers.handleNumberClick).toHaveBeenCalledWith(1);
  });

  it('handles operator button clicks', () => {
    render(<ButtonPanel {...mockHandlers} />);
    
    fireEvent.click(screen.getByText('+'));
    expect(mockHandlers.handleOperatorClick).toHaveBeenCalledWith('+');
  });

  it('handles clear button click', () => {
    render(<ButtonPanel {...mockHandlers} />);
    
    fireEvent.click(screen.getByText('AC'));
    expect(mockHandlers.handleClear).toHaveBeenCalled();
  });

  it('handles toggle sign button click', () => {
    render(<ButtonPanel {...mockHandlers} />);
    
    fireEvent.click(screen.getByText('+/-'));
    expect(mockHandlers.handleToggleSign).toHaveBeenCalled();
  });

  it('handles percent button click', () => {
    render(<ButtonPanel {...mockHandlers} />);
    
    fireEvent.click(screen.getByText('%'));
    expect(mockHandlers.handlePercent).toHaveBeenCalled();
  });

  it('handles equal button click', () => {
    render(<ButtonPanel {...mockHandlers} />);
    
    fireEvent.click(screen.getByText('='));
    expect(mockHandlers.handleEqual).toHaveBeenCalled();
  });
});