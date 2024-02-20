import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { 
  postContainer,
  postOverviewTitle,
  zoomContainer,
  postContainerLink
 } from '../../components/layout.module.css'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Projects">
      {
        data.allMdx.nodes.filter(node => node.fields.source === 'projects').map(node => (
          <div className={zoomContainer}>
          <Link to={`/projects/${node.frontmatter.slug}`} className={postContainerLink}>
          <article key={node.id} className={postContainer}>
            <h2 className={postOverviewTitle}>
                {node.frontmatter.title}
            </h2>
            <Link to={`/projects/${node.frontmatter.slug}`}><GatsbyImage image={getImage(node.frontmatter.heroImage)} alt={node.frontmatter.heroImageAlt} /></Link>
            {console.log(node.frontmatter.heroImage)}
          </article>
          </Link>
          </div>
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

export const Head = () => <Seo title="My Projects" />

export default BlogPage