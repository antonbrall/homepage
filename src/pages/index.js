import * as React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import "./mystyles.scss"

const IndexPage = ({data}) => {
  return (
    <Layout pageTitle="Anton Brall">
      
      <h1 class="title is-h1">Stuff I have written</h1>
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
    allMdx(sort: { frontmatter: { date: DESC }}, filter:{fields:{source: {eq: "blog"}}}, limit: 3) {
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

export const Head = () => <Seo title="Home Page" />

export default IndexPage