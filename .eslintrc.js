module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
      ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
      ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "comma-dangle": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-extra-semi": 2,
        "eqeqeq": 2,
        "no-eval": 2,
        "no-redeclare": 2,
        "no-delete-var": 2,
        "no-undef": 2,
        "no-unused-vars": 2,
        "eol-last": 2,
        "no-inline-comments": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 2,
        "space-infix-ops": 2,
        "spaced-comment": 2,
        "wrap-regex": 2,
        "no-var": 2,
        "prefer-const": 2,
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
        "arrow-parens": [2,"always"],
        "arrow-spacing": [2,{"before":true,"after":true}],
        "key-spacing": [2,{"align":"colon","afterColon":true}],
        "comma-spacing": [2,{"after":true}]
    }
};