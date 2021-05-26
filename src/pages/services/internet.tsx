import React from "react"

import Layout from "../../components/layout"
import PageHero from "../../components/PageHero"
import Pricing from "../../components/pages/index/Pricing"
import Features from "../../components/pages/services/internet/Features"
import Seo from "../../components/seo"

const Internet = ({
  pageContext,
  location,
}: {
  pageContext?: any
  location?: any
}) => (
  <Layout>
    <Seo title="Internet" />

    <PageHero
      pageContext={pageContext}
      location={location}
      crumbLabel="Internet"
    />
    <Features />
    <Pricing />
  </Layout>
)

export default Internet
