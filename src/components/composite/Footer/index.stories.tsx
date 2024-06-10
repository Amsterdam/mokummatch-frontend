import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './index';

export default {
  title: 'Composite/Footer',
  component: Footer,
  argTypes: {

  }

} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};