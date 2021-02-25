module.exports = api => {
  const isProd = process.env.NODE_ENV === 'production';
  api.cache.forever();

  const presets = [
    ["@babel/preset-env", {
      "debug": false,
      "modules": false,
      "useBuiltIns": false
    }],
    '@babel/preset-react',
    '@babel/preset-typescript',
    'babel-preset-mobx'
  ];
  const plugins = [
    [
      'react-css-modules',
      {
        'filetypes': {
          '.scss': {
            'syntax': 'postcss-scss',
            'plugins': ['postcss-nested']
          }
        },
        'generateScopedName': !isProd ? '[path][name]__[local]' : '[hash:base64]',
        'webpackHotModuleReloading': true,
        'autoResolveMultipleImports': true
      },
      
    ],
    // ["transform-runtime", {
    //   "regenerator": true,
    //   "polyfill": true
    // }],
    "@babel/syntax-dynamic-import",
    "@babel/plugin-transform-runtime",
    [ "@babel/plugin-proposal-class-properties", { "loose": true } ],
    "@babel/transform-async-to-generator",
    !isProd && 'react-refresh/babel',
    '@babel/plugin-proposal-optional-chaining'
  ].filter(Boolean);

  return {
    presets,
    plugins
  }
}