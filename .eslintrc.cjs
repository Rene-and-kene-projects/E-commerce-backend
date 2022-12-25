module.exports = {
  env: {
    node: true,
    es2021: true

  },

  extends: [

    'airbnb-base'

  ],

  parserOptions: {

    ecmaVersion: 'latest',

    sourceType: 'module'

  },

  rules: {
    'comma-dangle': ['error', 'never'],
    'linebreak-style': ['error', 'windows']
  }

};
