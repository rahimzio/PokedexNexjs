// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.push({
          test: /\.json$/,
          type: 'json',
        });
      }
      return config;
    },
  };
  