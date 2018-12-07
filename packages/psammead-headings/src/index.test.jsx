import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Headline from './index';

describe('Headline component', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Headline>This is my headline.</Headline>,
  );
});
