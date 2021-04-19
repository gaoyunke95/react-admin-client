//use for override webpack.config.js configs
const { override, fixBabelImports, addLessLoader } = require('customize-cra');


module.exports = override(

    //use babel-plugin-import to package/load base on the needs, import from antd/es
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true, //
    }),

    //use less loader to modify the less variable @primary-color
    addLessLoader({
        lessOptions:{
            javascriptEnabled: true, //enable js to modify less file
            modifyVars: { '@primary-color': '#4ca5a2' },
        }

    }),
);