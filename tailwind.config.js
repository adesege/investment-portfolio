module.exports = {
  purge: [
    './src/**/*.tsx?',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
  },
  corePlugins: {
    tableLayout: ['responsive', 'hover', 'focus'],
  },
};
