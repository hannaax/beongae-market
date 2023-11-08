// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: ["standard-with-typescript", "plugin:react/recommended", "prettier"],
//   overrides: [
//     {
//       env: {
//         node: true,
//       },
//       files: [".eslintrc.{js,cjs}"],
//       parserOptions: {
//         sourceType: "script",
//       },
//     },
//   ],
//   parserOptions: {
//     project: "**/tsconfig.json",
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
//   plugins: ["react"],
//   rules: {
//     "react/react-in-jsx-scope": "off",
//     "@typescript-eslint/explicit-function-return-type": "off",
//     "@typescript-eslint/strict-boolean-expressions": "off",
//     "@typescript-eslint/no-misused-promises": "off",
//     "@typescript-eslint/triple-slash-reference": "off",
//   },
// }

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    project: "**/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "import"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "type"],
        pathGroups: [
          {
            pattern: "react+(|-native)",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@**",
            group: "external",
            position: "after",
          },
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
  },
}
