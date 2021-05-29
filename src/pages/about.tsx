import React from "react"
import Layout from "../components/layout"
import PageHero from "../components/PageHero"
import About from "../components/pages/about/About"
import Team from "../components/pages/about/Team"
import Seo from "../components/seo"

const AboutPage = ({
  pageContext,
  location,
}: {
  pageContext: any
  location: any
}) => (
  <Layout>
    <Seo title="About Us" />
    <PageHero
      title="About Us"
      pageContext={pageContext}
      location={location}
      crumbLabel="About Us"
    />
    <About />
    <Team />
  </Layout>
)

export default AboutPage
