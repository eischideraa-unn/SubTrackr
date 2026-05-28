import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './Button';

describe('Button', () => {
  it('renders primary button snapshot', () => {
    const tree = renderer
      .create(<Button title="Subscribe" onPress={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
