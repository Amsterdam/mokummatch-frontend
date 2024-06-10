import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputTextField } from '.';

export default {
  title: 'Base/Textfield',
  component: InputTextField,
} as ComponentMeta<typeof InputTextField>;

const Template: ComponentStory<typeof InputTextField> = (args) => <InputTextField  {...args} />

export const primary = Template.bind({});
primary.args = {
  defaultValue: 'Default value that dissappears once on initial click',
};
