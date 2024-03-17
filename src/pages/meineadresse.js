import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AdressPage = () => {
  return (
    <Layout pageTitle="Meine aktuelle Adresse">
      <p>Anton Brall</p>
      <p>Stallvägen 21</p>
      <p>35252 Växjö</p>
      <p>Sweden</p>
      <p><i>vermutlich so bis Juni 24</i></p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AdressPage