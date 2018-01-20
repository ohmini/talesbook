import React from 'react';
import renderer from 'react-test-renderer'
import {Home} from './Home'

test('render', function() {
  const tree = renderer.create((
    <Home />
  )).toJSON()
  expect(tree).toMatchSnapshot()
})
