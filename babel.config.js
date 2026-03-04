module.exports = (api) => {
  const isEsm = api.env('esm');
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    presets: [
      ['@babel/preset-env', isEsm ? { targets: { esmodules: true }, modules: false } : { targets: { node: 18 } }],
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: [
      ...(isProduction ? [['transform-react-remove-prop-types', { mode: 'remove' }]] : []),
      '@babel/plugin-transform-shorthand-properties',
      '@babel/plugin-proposal-export-default-from',
    ],
  };
};
