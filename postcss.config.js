/* eslint-disable import/no-extraneous-dependencies,  global-require */

const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = ({ env }) => {
  const config = {
    plugins: basePlugins
  };

  if (inProduction(env)) {
    config.plugins = [...config.plugins, ...productionPlugins];
  }

  return config;
};

/**
|--------------------------------------------------
| Plugins
|--------------------------------------------------
*/

const basePlugins = [tailwindcss("./tailwind.config.js")];

const productionPlugins = [
  purgecss({
    content: ["./public/index.html", "./src/**/*.jsx"]
  })
];

/**
|--------------------------------------------------
| Helpers
|--------------------------------------------------
*/

function inProduction(env) {
  return env === "production";
}
