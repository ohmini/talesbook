import { configure } from '@storybook/react'

import './css/bulma.css'

function loadStories() {
  require('../home/Home.stroy')
  require('../character/CharacterCreator.story')
}

configure(loadStories, module)