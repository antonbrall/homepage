/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Anton Brall`,
    description: `Personal website for Anton Brall`,
    siteUrl: `https://brall.se`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-mdx-source-name", "gatsby-plugin-sitemap",
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
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "halbprivateupdates",
      "path": `./halbprivateupdates`
    },
  },
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      gatsbyRemarkPlugins: [
        {
         resolve: "gatsby-remark-autolink-headers",
         options: {
           icon: false,
         },
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 2000,
            linkImagesToOriginal: false,
          },
        },
        {
          resolve: `gatsby-remark-images-medium-zoom`,
          options: {
            background: "#ffecd1",
          },
        },
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
  },
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMdx } }) => {
            return allMdx.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.frontmatter.description,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.slug,
                guid: site.siteMetadata.siteUrl + '/' + edge.node.frontmatter.slug,
              })
            })
          },
          query: `
            {
              allMdx(sort: { frontmatter: { date: DESC }}, filter:{fields:{source: {eq: "blog"}}, frontmatter: {published: {eq: true}}}) {
                edges {
                  node {
                    frontmatter {
                      title
                      date
                      description
                      slug
                    }
                  }
                }
              }
            }
          `,
          output: "/rss.xml",
          title: "Anton Brall's RSS Feed",
        },
      ],
    },
  },
]
};