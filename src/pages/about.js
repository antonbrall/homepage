import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi I'm Anton</p>
      <p>Contact me if you want to: <a href="mailto:contact@brall.se">contact@brall.se</a></p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage