module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  overrides: [
    {
      files: ["eslintrc.{js, cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react-refresh", "prettier", "react-hooks"],
  rules: {
    semi: "warn",
    "no-unused-vars": "warn",
    "import/no-extraneous-dependencies": "off",
    "react/button-has-type": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-bind": "off",
    "react/self-closing-comp": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unknown-property": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "no-param-reassign": 0,
    "no-underscore-dangle": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
