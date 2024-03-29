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
        data.allMdx.nodes.map(node => (
          <div className={`${zoomContainer} ${postContainer}`}>
          <Link to={`/projects/${node.frontmatter.slug}`} className={postContainerLink}>
          <article key={node.id}>
            <h2 className={postOverviewTitle}>
                {node.frontmatter.title}
            </h2>
            <GatsbyImage image={getImage(node.frontmatter.heroImage)} alt={node.frontmatter.heroImageAlt} />
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
    allMdx(sort: { frontmatter: { date: DESC }}, filter:{fields:{source: {eq: "projects"}}}) {
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

export const Head = () => <Seo title="My Projects" />

export default BlogPage