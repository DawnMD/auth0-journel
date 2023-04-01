module.exports = {
  hooks: {
    readPackage: (pkg) => {
      if (pkg.scripts && pkg.scripts.start) {
        pkg.scripts.start = 'DATABASE_URL=$DATABASE_URL node index.js';
      }
      return pkg;
    },
  },
  plugins: {
    '@pnpm/plugin-commands': {
      commands: [
        'start',
      ],
    },
  },
};
