// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    assetExts: [
      ...defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'),
      'pv', // picovoice speech-to-text params
      'ppn', // picovoice wake-word params
    ],
  },
};
