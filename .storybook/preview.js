// import { themes } from '@storybook/theming';

export const parameters = {
  // docs: {
  //   theme: themes.light, 
  // },

  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}