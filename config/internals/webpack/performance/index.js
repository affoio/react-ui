export default isDev =>
  isDev
    ? { hints: false }
    : {
        assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
      };
