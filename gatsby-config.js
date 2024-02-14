/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Anton Brall`,
    siteUrl: `https://brall.se`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "blog",
      "path": `./blog`
    },
  },"gatsby-plugin-mdx",]
};