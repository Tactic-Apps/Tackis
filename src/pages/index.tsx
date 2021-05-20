import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/pages/index/Hero"
import Features from "../components/pages/index/Features"
import Coverage from "../components/pages/index/Coverage"
import Pricing from "../components/pages/index/Pricing"
import Testimonials from "../components/pages/index/Testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Features />
    <Coverage />
    <Pricing />
    <Testimonials />
  </Layout>
)

export default IndexPage
