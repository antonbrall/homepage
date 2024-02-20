import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hi! I'm a journalist and photographer from Sweden</p>
      <StaticImage
        alt="Image of Anton Brall sitting in a small cavern"
        src="../images/ich.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage