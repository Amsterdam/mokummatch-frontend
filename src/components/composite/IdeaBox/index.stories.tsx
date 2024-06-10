import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IdeaBox } from '.';

export default {
  title: 'Composite/IdeaBox',
  component: IdeaBox,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof IdeaBox>;

const Template: ComponentStory<typeof IdeaBox> = (args) => <IdeaBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // backgroundColor: '',
};