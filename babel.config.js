// eslint-disable-next-line no-undef
module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        targets: { ie: 11 },
        corejs: 3,
      },
    ],
    ['@babel/react', { runtime: 'automatic' }],
  ],
  // eslint-disable-next-line no-undef
  plugins: [
    process.env.NODE_ENV === 'development' &&
      require.resolve('react-refresh/babel'),
  ].filter(Boolean),
}
