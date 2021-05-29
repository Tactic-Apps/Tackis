import React from "react"

import Layout from "../../components/layout"
import PageHero from "../../components/PageHero"
import Pricing from "../../components/pages/index/Pricing"
import Features from "../../components/pages/services/internet/Features"
import Steps from "../../components/pages/services/internet/Steps"
import Warning from "../../components/pages/services/internet/Warning"
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
      title="Internet"
      pageContext={pageContext}
      location={location}
      crumbLabel="Internet"
    />
    <Features />
    <Steps />
    <Pricing />
    <Warning />
  </Layout>
)

export default Internet
