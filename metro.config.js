const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Custom resolver to fix tslib issue
const { resolver } = config;

config.resolver = {
  ...resolver,
  extraNodeModules: {
    ...resolver.extraNodeModules,
    tslib: require.resolve('tslib/tslib.es6.js'),
  },
  blacklistRE: [
    /node_modules\/.*\/node_modules\/react-native\/.*/,
  ],
  nodeModulesPaths: [
    'node_modules',
    ...resolver.nodeModulesPaths || [],
  ],
};

// Custom serializer to handle tslib imports
config.serializer = {
  ...config.serializer,
  getModulesRunBeforeMainModule: () => [
    require.resolve('tslib/tslib.es6.js'),
  ],
};

module.exports = withNativeWind(config, { input: './globals.css' });