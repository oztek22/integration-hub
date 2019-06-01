const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
} = require('customize-cra');

module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#614ae2',
      '@text-color': '#223142',
    },
  })
);
