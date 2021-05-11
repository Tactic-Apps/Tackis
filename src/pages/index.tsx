import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/pages/index/Hero"
import Features from "../components/pages/index/Features"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Features/>
  </Layout>
)

export default IndexPage
