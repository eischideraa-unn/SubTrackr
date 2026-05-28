import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import { Card } from './Card';

describe('Card', () => {
  it('renders elevated card snapshot', () => {
    const tree = renderer
      .create(
        <Card variant="elevated" padding="small">
          <Text>Card content</Text>
        </Card>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
