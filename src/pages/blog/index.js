import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
  postContainer,
  postOverviewTitle,
  zoomContainer,
  postContainerLink,
  flexContainer,
  flexContainerInside2
} from '../../components/layout.module.css'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Stuff I have written">
      <div className={flexContainer}>
      {
        data.allMdx.nodes.map(node => (
          <div className={flexContainerInside2}>
          <div className={`${zoomContainer} ${postContainer}`} key={node.id}>
            <Link to={`/blog/${node.frontmatter.slug}`} className={postContainerLink}>
              <div>
                <h2 className={postOverviewTitle}>
                  {node.frontmatter.title}
                </h2>
                <GatsbyImage image={getImage(node.frontmatter.heroImage)} alt={node.frontmatter.heroImageAlt} />
                {console.log(node.frontmatter.heroImage)}
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
    allMdx(sort: { frontmatter: { date: DESC }}, filter:{fields:{source: {eq: "blog"}}, frontmatter: {published: {eq: true}}}) {
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