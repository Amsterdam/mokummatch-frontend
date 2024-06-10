const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, '..', 'src'),
    };

    return config;
  },
};