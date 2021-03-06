const config = require('./settings.json')
const url = require('url')

const siteUrl = url.parse(config.siteUrl)

module.exports = {
  siteMetadata: {
    title: config.title,
    author: config.author,
    description: config.description,
    siteUrl: config.siteUrl,
  },
  pathPrefix: siteUrl ? siteUrl.pathname : '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: 'projects',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-normalize-paths',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-130160435-5`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    'gatsby-plugin-styled-components',
    `gatsby-plugin-catch-links`,
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rndr`,
        short_name: `rndr`,
        start_url: `/`,
        background_color: `#ffffff`,
        icon: `src/assets/favicon.png`,
        display: 'minimal-ui',
        theme_color: '#A0AEC0'
      },
    },
    {
      resolve:'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        //develop: true,            // Activates purging in npm run develop
        tailwind: true,
        purgeOnly: ['src/css/style.scss'], // Purge only tailwind
        whitelist: ['active'],
      },
    }, // must be after other CSS plugins
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-json',
  ],
}
