import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderSection from './HeaderSection';

export default {
  title: 'Sections/SocialsHeaderSection',
  component: HeaderSection,
} as ComponentMeta<typeof HeaderSection>;

const Template: ComponentStory<typeof HeaderSection> = (args) => <HeaderSection />;

export const SocialsPage = Template.bind({});
