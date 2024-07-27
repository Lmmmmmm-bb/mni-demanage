import antfu from '@antfu/eslint-config';

export default antfu({}, {
  rules: {
    'antfu/top-level-function': 'off',

    'curly': ['error', 'all'],
    'ts/no-unused-expressions': 'off',

    'style/semi': ['error', 'always'],
    'style/member-delimiter-style': ['error', {}],
    'style/brace-style': ['error', '1tbs', { allowSingleLine: false }],
  },
});
