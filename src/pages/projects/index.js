import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.filter(node => node.fields.source === 'projects').map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <Link to={`/blog/${node.frontmatter.slug}`}><GatsbyImage image={getImage(node.frontmatter.heroImage)} alt={node.frontmatter.heroImageAlt} /></Link>
            {console.log(node.frontmatter.heroImage)}
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          heroImage {
            childImageSharp {
              gatsbyImageData(width: 1000)
              }
            }
          heroImageAlt
          
        }
        id
        fields {
          source
        }
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage