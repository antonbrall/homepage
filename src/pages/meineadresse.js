import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AdressPage = () => {
  return (
    <Layout pageTitle="Meine aktuelle Adresse">
      <p>Anton Brall</p>
      <p>Kvartsvägen 11C lgh 1002</p>
      <p>90741 Umeå</p>
      <p>Sweden</p>
      <p><i>ab 1.8.25</i></p>
      <br></br>
      <p>Anton Brall</p>
      <p>Stipendiegränd 10C lgh 1302</p>
      <p>90735 Umeå</p>
      <p>Sweden</p>
      <p><i>bis 31.7.25</i></p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AdressPage