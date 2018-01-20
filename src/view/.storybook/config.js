import { configure } from '@storybook/react'

function loadStories() {
  require('../home/Home.stroy')
  require('../character/CharacterCreator.story')
}

configure(loadStories, module)