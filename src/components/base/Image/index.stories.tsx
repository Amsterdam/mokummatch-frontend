import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImageComponent from '.';

export default {
  title: 'Base/Image',
  component: ImageComponent,
} as ComponentMeta<typeof ImageComponent>;

const Template: ComponentStory<typeof ImageComponent> = (args) => <ImageComponent  {...args}/>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    backgroundUrl:'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640',
};

