module.exports = (api) => {
  const isEsm = api.env('esm');

  return {
    presets: [
      ['@babel/preset-env', isEsm ? { targets: { esmodules: true }, modules: false } : { targets: { node: 18 } }],
      '@babel/preset-typescript',
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: ['@babel/plugin-transform-shorthand-properties', '@babel/plugin-proposal-export-default-from'],
  };
};
