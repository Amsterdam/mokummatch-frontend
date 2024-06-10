import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SocialLinks from '.';

export default {
  title: 'Base/SocialLinks',
  component: SocialLinks,
} as ComponentMeta<typeof SocialLinks>;

const Template: ComponentStory<typeof SocialLinks> = (args) => <SocialLinks  {...args}/>;

export const Links = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Links.args = {
    whatsapp: "https://reactjs.org/",
    facebook: "https://nl-nl.facebook.com/",
    instagram: "https://www.instagram.com/?hl=en",
    twitter: "https://twitter.com/?lang=en"
}
