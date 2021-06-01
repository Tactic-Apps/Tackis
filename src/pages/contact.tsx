import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHero from "../components/PageHero"
import Contact from "../components/pages/contact/Contact"

const ContactPage = ({
  pageContext,
  location,
}: {
  pageContext: any
  location: any
}) => {
  return (
    <Layout>
      <Seo title="Contact Us" />
      <PageHero
        title="Contact Us"
        pageContext={pageContext}
        location={location}
        crumbLabel="Contact Us"
      />
      <Contact />
    </Layout>
  )
}

export default ContactPage
