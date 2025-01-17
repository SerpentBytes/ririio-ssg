module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: [],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "no-plusplus": ["off"],
    "arrow-body-style": ["off"],
    "no-console": ["off"],
  },
  env: {
    es2021: true,
    node: true,
  },
};
