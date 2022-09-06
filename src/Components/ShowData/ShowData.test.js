import { render, screen, cleanup } from '@testing-library/react';
import { ShowData } from './showData';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});
jest.mock('../../context/dataContext', () => ({
  useData: () => ({
    data: [{ id: 172581071, name: 'github', license: 'abc' }],
    setCheck: () => {},
    check: true,
    loading: true,
  }),
}));

describe('show data test', () => {
  test('should test for rendering', () => {
    render(<ShowData />);
    const element = screen.getByTestId('showdata');
    expect(element).toBeInTheDocument();
  });
});
