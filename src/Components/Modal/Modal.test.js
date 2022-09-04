import { render, screen, cleanup } from '@testing-library/react';
import { Modal } from './Modal';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});
jest.mock('../../Context/data-context', () => ({
  useData: () => ({
    data: [{ id: 172581071, name: 'github', license: 'abc' }],
    setCheck: () => {},
    check: true,
  }),
}));

describe('modal test', () => {
  test('should test for rendering', () => {
    render(<Modal />);
    const element = screen.getByTestId('modal');
    expect(element).toBeInTheDocument();
  });
});
