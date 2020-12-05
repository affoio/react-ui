export default () => [
  {
    test: /\.(svg|jpg|png|gif|mp4|webm)$/,
    use: [
      {
        loader: 'url-loader',
      },
    ],
  },
];
