import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavBar from '.';
import { MemoryRouter } from 'react-router';

export default {
  title: 'Composite/NavBar',
  component: NavBar,
  decorators : [
    (NavBar) => (<MemoryRouter><NavBar /></MemoryRouter>)
  ]
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar  {...args}/>;

export const Primary= Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'Mokummatch',
};
