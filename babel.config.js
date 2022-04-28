module.exports = {
  babelrcRoots: ['.', './packages'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-lodash',
    '@babel/plugin-syntax-dynamic-import'
  ],
  env: {
    test: {
      plugins: [
        'istanbul',
        [
          'babel-plugin-styled-components',
          { fileName: false, displayName: true }
        ]
      ]
    }
  },
  presets: [
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // alternative mode: "entry"
        corejs: 3, // default would be 2
        targets: '> 0.25%, not dead'
        // set your own target environment here (see Browserslist)
      }
    ],
    '@babel/preset-react'
  ]
};
