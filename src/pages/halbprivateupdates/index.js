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

const UpdatePage = ({ data }) => {
  return (
    <Layout pageTitle="Meine halbprivaten Updates">
      <div>
        Hier poste ich in unregelmäßigen Abständen Updates aus meinem Leben. Manchmal füge ich auch später noch Fotos hinzu (analogbilder oder Leute die zu faul sind die direkt zu teilen) oder auch manchmal ein Video.
      </div>
      {
        data.allMdx.nodes.map(node => (
          <div className={`${zoomContainer} ${postContainer}`}>
          <Link to={`/halbprivateupdates/${node.frontmatter.slug}`} className={postContainerLink}>
          <article key={node.id}>
            <h2 className={postOverviewTitle}>
                {node.frontmatter.title}, {node.frontmatter.date}
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
    allMdx(sort: { frontmatter: { date: DESC }}, filter:{fields:{source: {eq: "halbprivateupdates"}}, frontmatter: {published: {eq: true}}}) {
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

export const Head = () => <Seo title="Meine halbprivaten Updates" />

export default UpdatePage