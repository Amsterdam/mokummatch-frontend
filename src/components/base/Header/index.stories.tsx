import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderComponent from '.';

export default {
  title: 'Base/Header',
  component: HeaderComponent,
  argTypes:{
    variant:{control: 'select', options: ['h1', 'h2', 'h3','h4', 'h5', 'h6']},
    align: {control: 'radio', options: ['center', 'left', 'right','justify', 'inherit'], defaultValue: 'center'},
    isParagraph: {control : 'boolean'}
  }
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = (args) => <HeaderComponent  {...args} />

export const H1 = Template.bind({});
H1.args = {
 variant: 'h1',
 text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  
};

export const H2 = Template.bind({});
H2.args = {
 variant: 'h2',
 text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  
};

export const H3 = Template.bind({});
H3.args = {
 variant: 'h3',
 text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  
};

export const H4 = Template.bind({});
H4.args = {
 variant: 'h4',
 text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  
};

export const H5 = Template.bind({});
H5.args = {
 variant: 'h5',
 text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  
};

export const H6 = Template.bind({});
H6.args = {
 variant: 'h6',
 text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  
};

export const isParagraphHeader = Template.bind({});
isParagraphHeader.args = {
    isParagraph: true,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  
}

export const CenterAlign = Template.bind({});
CenterAlign.args = {
  align: 'center',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  
}

export const LeftAlign = Template.bind({});
LeftAlign.args = {
  align: 'left',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  
}
export const RightAlign = Template.bind({});
RightAlign.args = {
  align: 'right',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  
}
export const JustifyAlign = Template.bind({});
JustifyAlign.args = {
  align: 'justify',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  
}

export const InheritAlign = Template.bind({});
InheritAlign.args = {
  align: 'inherit',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'  
}
