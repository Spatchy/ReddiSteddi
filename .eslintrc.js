module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  "overrides": [
    {
      "files": [
        ".eslintrc.js",
        "babel.config.js"
      ],
      "env": {
        "node": true
      },
      "parserOptions": {
        "project": null,
        "sourceType": "script"
      }
    },
    {
      "files": [
        "*.raw.js"
      ],
      "env": {
        "node": false,
        "web": true
      },
      "parserOptions": {
        "project": null,
        "sourceType": "script"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": './tsconfig.json',
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": "off",
    "@typescript-eslint/quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "never"
    ],
    "react/react-in-jsx-scope":"off"
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
}
