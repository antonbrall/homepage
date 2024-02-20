/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Anton Brall`,
    description: `Personal website for Anton Brall`,
    siteUrl: `https://brall.se`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-mdx-source-name", "gatsby-plugin-sitemap", "gatsby-plugin-sass",
   {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "blog",
      "path": `./blog`
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "projects",
      "path": `./projects`
    },
  },
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 1200,
          },
        },
        {
          resolve: "gatsby-remark-bulma",
          options: {
          },
        }
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://brall.se',
      sitemap: 'https://brall.se/sitemap-index.xml',
      policy: [{userAgent: '*', allow: '/'}]
    }
  }
]
};