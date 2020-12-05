import addProdMiddlewares from './addProdMiddlewares';
import webpackConfig from '../../../config/internals/webpack/webpack.base.babel';
import addDevMiddlewares from './addDevMiddlewares';

export default (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    addProdMiddlewares(app, options);
  } else {
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
