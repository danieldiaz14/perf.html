module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  parserOptions: {
    ecmaVersion: '2017',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['babel', 'react', 'flowtype', 'import', 'prettier'],
  rules: {
    // Plugin rules:
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'es5' }],
    'react/no-access-state-in-setstate': 'error',
    'react/no-danger': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-typos': 'error',
    // `no-unused-prop-types` is buggy when we use destructuring parameters in
    // functions as it misunderstands them as functional components.
    // See https://github.com/yannickcr/eslint-plugin-react/issues/1561
    // 'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: true },
    ],
    'react/jsx-no-bind': 'error',

    // overriding recommended rules
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // possible errors
    'array-callback-return': 'error',
    'consistent-return': 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'for-direction': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implied-eval': 'error',
    // We use the version from the babel plugin so that `this` in a function
    // class property doesn't give a false positive.
    'babel/no-invalid-this': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'prefer-const': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
  },
  settings: {
    react: {
      pragma: 'React',
      version: '15.0',
      flowVersion: '0.63.1',
    },
  },
};
