import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import "../mystyles.scss"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <div class="columns is-multiline">
      {
        data.allMdx.nodes.map(node => (
          
            <div class="column is-one-third">
              <div class="zoom-container">
              <Link to={`/blog/${node.frontmatter.slug}`}>
              <div class="card" key={node.id}>
                <div class="card-image">
                  <GatsbyImage image={getImage(node.frontmatter.heroImage)} alt={node.frontmatter.heroImageAlt} />
                </div>
                <div class="card-content">

                  <div class="content">
                    <h2 class="title is-h2">{node.frontmatter.title}</h2>
                    <p>Posted: {node.frontmatter.date}</p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
            </div>
          
        ))
      }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}, filter:{fields:{source: {eq: "blog"}}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          heroImage {
            childImageSharp {
              gatsbyImageData(width: 2000)
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