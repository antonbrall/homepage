import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AdressPage = () => {
  return (
    <Layout pageTitle="Meine aktuelle Adresse">
      <p>Anton Brall</p>
      <p>Stipendiegränd 10C</p>
      <p>90735 Umeå</p>
      <p>Sweden</p>
      <p><i>ab 1.8.24</i></p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AdressPage