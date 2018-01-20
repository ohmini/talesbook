import React from 'react'
import renderer from 'react-test-renderer'

import {CharacterCreator} from './CharacterCreator'

test('render', () => {
	const tree = renderer.create(
		<CharacterCreator />
	).toJSON()
	expect(tree).toMatchSnapshot()
})