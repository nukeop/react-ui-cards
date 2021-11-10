module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    //"@storybook/preset-create-react-app",
    '@storybook/preset-scss'
  ],
  webpackFinal: async (config) => {
    config.module.rules.find(({ test }) => test.test('.svg')).test = /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;

    config.module.rules.unshift({  
      test: /\.svg$/,  
      use: "raw-loader"
    });

    return config;
  }
}