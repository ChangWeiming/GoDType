const { override, fixBabelImports, addLessLoader } = require('customize-cra')
const path = require('path')

module.exports = {
  paths: function (paths, env) {
      paths.appIndexJs = path.resolve(__dirname, "appsrc/index.tsx");
      paths.appSrc = path.resolve(__dirname, "appsrc");
      paths.testsSetup = path.resolve(__dirname, "appsrc/setupTests");
      paths.proxySetup = path.resolve(__dirname, "appsrc/setupProxy.js");
      paths.appTypeDeclarations = path.resolve(__dirname, "appsrc/react-app-env.d.ts");

      return paths;
  },
  webpack: override(
      fixBabelImports('import', {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css',
      }),
      addLessLoader(),
  )
}