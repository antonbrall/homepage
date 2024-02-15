/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Anton Brall`,
    siteUrl: `https://brall.se`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-mdx-source-name",
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
      ],
    },
  },]
};