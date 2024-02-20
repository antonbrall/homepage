import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import Seo from '../components/seo'
import {
  postContainer,
  postOverviewTitle,
  zoomContainer,
  postContainerLink,
  heading,
  flexContainer,
  flexContainerInside
} from '../components/layout.module.css'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hi! I'm a journalist and photographer living in Sweden</p>
      <StaticImage
        alt="Image of Anton Brall sitting in a small cavern"
        src="../images/ich.jpg"
      />
      <Link to={`/blog`} className={postContainerLink}>
        <h1 className={heading}>My Projects</h1>
      </Link>
      <div className={flexContainer}>
        {
          data.allMdx.nodes.map(node => (
            <div className={flexContainerInside}>
              <div class={`${zoomContainer} ${postContainer}`} key={node.id}>
                <Link to={`/projects/${node.frontmatter.slug}`} className={postContainerLink}>
                  <div key={node.id}>
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
    allMdx(sort: { frontmatter: { date: DESC }}, filter:{fields:{source: {eq: "projects"}}}, limit: 3) {
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