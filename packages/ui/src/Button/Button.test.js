import 'jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Button from './Buttonn';

afterEach(cleanup);

describe(':: Button Component ::', () => {
  it('applies correct default props', () => {
    const { getByTestId } = render(
      <Button>
        {({ getProps }) => (
          <button {...getProps()} data-testid="my-button">
            Example Button
          </button>
        )}
      </Button>
    );
    expect(getByTestId('my-button')).toHaveAttribute('role', 'button');
    expect(getByTestId('my-button')).toHaveAttribute('type', 'button');
  });

  it('correctly overrides type prop', () => {
    const { getByTestId } = render(
      <Button type="submit">
        {({ getProps }) => (
          <button {...getProps()} data-testid="my-button">
            Example Button
          </button>
        )}
      </Button>
    );
    expect(getByTestId('my-button')).toHaveAttribute('role', 'button');
    expect(getByTestId('my-button')).toHaveAttribute('type', 'submit');
  });
});
