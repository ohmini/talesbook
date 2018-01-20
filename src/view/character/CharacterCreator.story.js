import React from 'react'
import {storiesOf} from '@storybook/react'

import CharacterCreator from './CharacterCreator'

storiesOf('CharacterCreator', module)
	.add('blank', () => {
		return (
			<CharacterCreator />
		)
	})