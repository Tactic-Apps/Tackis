import React from "react"
import Layout from "../../components/layout"
import PageHero from "../../components/PageHero"
import News from "../../components/pages/news/News"
import Seo from "../../components/seo"

const AboutPage = ({
  pageContext,
  location,
}: {
  pageContext: any
  location: any
}) => (
  <Layout>
    <Seo title="News & Blog" />
    <PageHero
      title="Community News & Blog"
      pageContext={pageContext}
      location={location}
      crumbLabel="News"
    />
    <News />
  </Layout>
)

export default AboutPage
