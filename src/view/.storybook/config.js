import { configure } from '@storybook/react'

function loadStories() {
  require('../home/Home.stroy')
  
}

configure(loadStories, module)