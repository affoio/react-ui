import path from 'path';

const devEntry =  ['webpack-hot-middleware/client?reload=true', path.join(process.cwd(), 'dev/index.jsx')];

const prodEntry = [path.join(process.cwd(), 'src/index.js')];

export default isDev => {
  if (isDev) {
    return [...devEntry];
  }

  return prodEntry;
};
