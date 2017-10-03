import 'react-native';
import React from 'react';
import Hello, { styles } from '../src/components/Hello';
import { render, shallow } from 'enzyme';

import {
  Text
} from 'react-native';

const wrapper = shallow(
  <Hello alias="fernando" />
);

it('Hello component renders correctly', () => {
  // To update snapshot. => npm test -- -u Hello.test
  expect(wrapper).toMatchSnapshot();
});

it('Property alias should contain a Text component with "Hello {alias}"', () => {
  expect(wrapper.contains(
    <Text style={styles.title}>
      Hello fernando
    </Text>
  )).toBe(true);
});