const { pathsToModuleNameMapper } = require('ts-jest');

const paths = { $lib: ['src/lib'], '$lib/*': ['src/lib/*'] };

module.exports = {
  preset: 'ts-jest',
  passWithNoTests: true,
  moduleNameMapper: {
    ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
    // Workaround: https://stackoverflow.com/a/54117206
    '^lodash-es$': 'lodash',
  },
};
