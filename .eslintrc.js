module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'max-len': ['error', {code: 120}],
    'max-lines': [
      'error',
      {max: 300, skipBlankLines: true, skipComments: true},
    ],
  },
};
