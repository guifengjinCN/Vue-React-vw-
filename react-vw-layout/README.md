1. npm run eject 暴露配置项
2. postCss插件安装
`yarn add postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano --save`
3. config/webpack.config.dev.js
```js
// config/webpack.config.dev.js
// 文件头部引进依赖
const fs = require('fs');
const path = require('path');
const resolve = require('resolve');
const webpack = require('webpack');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const getClientEnvironment = require('./env');
const paths = require('./paths');
const ManifestPlugin = require('webpack-manifest-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin-alt');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');

// ---------------------移动端适配添加-开始-----------------------
const postcssAspectRatioMini = require('postcss-aspect-ratio-mini');
const postcssPxToViewport = require('postcss-px-to-viewport');
const postcssWriteSvg = require('postcss-write-svg');
const postcssCssnext = require('postcss-preset-env');
const postcssViewportUnits = require('postcss-viewport-units');
const cssnano = require('cssnano');
// ---------------------移动端适配添加-结束-----------------------


//配置项中添加使用

 {
    // Options for PostCSS as we reference these options twice
    // Adds vendor prefixing based on your specified browser support in
    // package.json
    loader: require.resolve('postcss-loader'),
    options: {
      // Necessary for external CSS imports to work
      // https://github.com/facebook/create-react-app/issues/2677
      ident: 'postcss',
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
        }),

        // -----------------插入适配移动端配置项-开始------------------
        postcssAspectRatioMini({}),
        postcssPxToViewport({
          viewportWidth: 750, // (Number) The width of the viewport.
          viewportHeight: 1334, // (Number) The height of the viewport.
          unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
          viewportUnit: 'vw', // (String) Expected units.
          selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
          minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
          mediaQuery: false // (Boolean) Allow px to be converted in media queries.
        }),
        postcssWriteSvg({
          utf8: false
        }),
        postcssCssnext({}),
        postcssViewportUnits({}),
        cssnano({
          //旧的 --坑点
          // preset: "advanced",
          // autoprefixer: false,
          // "postcss-zindex": false
          //新配置继续使用高级配置,按照这个配置
          "cssnano-preset-advanced": {
            zindex: false,
            autoprefixer: false
          },
        })
	// -----------------插入适配移动端配置项-结束------------------
      ],
    },
},

```
