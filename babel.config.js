module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ESTA LINHA DEVE SER A ÚLTIMA NA LISTA DE PLUGINS
      'react-native-reanimated/plugin',
    ],
  };
};