module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  ignorePatterns: "**/*.d.ts",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
  rules: {
    "no-nested-ternary": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
    "no-use-before-define": "off",
    "no-restricted-syntax": "off",
    "@typescript-eslint/no-use-before-define": ["warn"],
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "no-param-reassign": ["error", { props: false }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.ts",
          "**/*.test.tsx",
          "**/*.spec.ts",
          "**/*.spec.tsx",
          "src/utils/test-utils.tsx",
        ],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        singleQuote: false,
      },
    ],
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/control-has-associated-label": "off",
    quotes: ["error", "double"], // Enforce double quotes
    "jsx-quotes": ["error", "prefer-double"], // Enforce double quotes in JSX

    // Prevent React from being removed as unused
    "no-unused-vars": ["warn", { varsIgnorePattern: "^React$" }],

    // Disable the rule that checks for React being in scope for JSX
    "react/react-in-jsx-scope": "off", // React 17+ JSX transform allows JSX without import React
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
