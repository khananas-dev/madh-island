const withTM = require('next-transpile-modules')(['@mui/material', '@mui/system']); // pass the modules you would like to see transpiled
module.exports = withTM({
  distDir: 'build',

  images: {
    domains: ['a0.muscache.com','images.unsplash.com','vmi-assets.s3.amazonaws.com','vmi-assets.s3.us-east-2.amazonaws.com'],
  },

  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };
    return config;
  },
});

