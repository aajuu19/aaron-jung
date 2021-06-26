module.exports = {
  reactStrictMode: true,
};

module.exports = (phase, { defaultConfig }) => {
  if ("sassOptions" in defaultConfig) {
    defaultConfig["sassOptions"] = {
      includePaths: ["./src"],
      prependData: `@import "./styles/utils/_mixins.scss";`,
    };
  }
  return defaultConfig;
};
