const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  serverRuntimeConfig: {
    previewSecret: process.env.UNIFORM_PREVIEW_SECRET,
    contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
    contentfulEnvironment: process.env.CONTENTFUL_ENVIRONMENT,
    contentfulPreviewToken: process.env.CONTENTFUL_CPA_ACCESS_TOKEN,
    contentfulDeliveryToken: process.env.CONTENTFUL_CDA_ACCESS_TOKEN,
    presentationApiHost: process.env.UNIFORM_PRESENTATION_API_HOST,
    presentationProjectId: process.env.UNIFORM_PROJECT_ID,
    uniformApiKey: process.env.UNIFORM_API_KEY,
    bigCommerceStoreHash: process.env.BIGCOMMERCE_STORE_HASH,
    bigCommerceToken: process.env.BIGCOMMERCE_TOKEN,
  },
  images: {
    loader: 'cloudinary',
    domains: ['res.cloudinary.com'],
    path: 'https://res.cloudinary.com/uniformdev/image/fetch',
  },
  publicRuntimeConfig: {
    gaTrackingId: process.env.GA_UA_ID,
    previewEnabled: process.env.UNIFORM_PREVIEW_ENABLED,
    previewSecret: process.env.UNIFORM_PREVIEW_SECRET,
  },
  future: {
    webpack5: false,
  },
  target: 'serverless',
  trailingSlash: true,
  webpack: (config, { dev }) => {
    // disable sourcemaps of webpack
    config.devtool = false;

    // disable soucemaps of babel-loader
    for (const r of config.module.rules) {
      if (r.loader === 'babel-loader') {
        r.options.sourceMaps = false;
      }
    }

    return config;
  },
});
