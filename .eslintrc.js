module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:import/errors"
  ],
  "rules": {
    "no-use-before-define": 0,
    "arrow-body-style": 0,
    "dot-notation": 0,
    "no-console": 0
  },
  "env": {
    "mocha": true,
    "node": true,
    "es6": true
  }
};
