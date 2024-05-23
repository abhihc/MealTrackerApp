const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    resolveRequest: (context, realModuleName, platform, moduleName) => {
      if (realModuleName === 'invariant') {
        return {
          type: 'sourceFile',
          filePath: require.resolve('invariant/browser.js'),
        };
      }
      return context.resolveRequest(context, realModuleName, platform, moduleName);
    },
    extraNodeModules: {
      invariant: require.resolve('invariant'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
