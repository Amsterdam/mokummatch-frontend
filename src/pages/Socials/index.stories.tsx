import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Socials from '.';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { MemoryRouter } from 'react-router';


export default {
  title: 'Page/Socials',
  component: Socials,
  decorators : [
    (Socials) => (<Provider store={store}><MemoryRouter><Socials /></MemoryRouter></Provider>)
  ]
} as ComponentMeta<typeof Socials>;

const Template: ComponentStory<typeof Socials> = (args) => <Socials />;

export const SocialsPage = Template.bind({});
