import React from "react"

import Layout from "../../components/layout"
import PageHero from "../../components/PageHero"
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
  </Layout>
)

export default Internet
