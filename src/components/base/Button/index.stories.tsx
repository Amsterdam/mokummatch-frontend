import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  ButtonComponent from '.';

export default {
  title: 'Base/Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: {control: 'color'},
    size: {control: 'radio', options: ['small', 'medium', 'large'], defaultValue: 'medium' },
    variant: {control: 'radio', options: ['contained', 'outlined', 'text'], defaultValue: 'contained'}
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Contained = Template.bind({});
Contained.args = {
    variant: 'contained',
    label: 'Button'
}

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
    label: 'Button'
}

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
    label: 'Button'
}