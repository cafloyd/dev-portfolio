const contentful = require('contentful');
const manifestConfig = require('./manifest-config');
require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, DETERMINISTIC } = process.env;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

const getAboutEntry = (entry) => entry.sys.contentType.sys.id === 'about';

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Lato', 'Nunito'],
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: manifestConfig,
  },
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    },
  },
  'gatsby-transformer-remark',
  'gatsby-plugin-offline',
  'gatsby-plugin-mailgo',
];

module.exports = client.getEntries().then((entries) => {
  const { mediumUser } = entries.items.find(getAboutEntry).fields;

  plugins.push({
    resolve: 'gatsby-source-medium',
    options: {
      username: mediumUser || '@medium',
    },
  });
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'G-L4N8WYC5DJ',
    },
  });

  return {
    siteMetadata: {
      isMediumUserDefined: !!mediumUser,
      deterministicBehaviour: !!DETERMINISTIC,
    },
    plugins,
  };
});
