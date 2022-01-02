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
  plugins: [
    //To get the NODE_ENV the package.json's script has to have NODE_ENV=development
    process.env.NODE_ENV === 'development' &&
      require.resolve('react-refresh/babel'),
  ].filter(Boolean),
}
