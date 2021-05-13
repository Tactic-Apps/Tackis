import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/pages/index/Hero"
import Features from "../components/pages/index/Features"
import Coverage from "../components/pages/index/Coverage"
import Pricing from "../components/pages/index/Pricing"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Features />
    <Coverage />
    <Pricing />
  </Layout>
)

export default IndexPage
