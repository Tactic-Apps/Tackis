/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Waypoint } from "react-waypoint"

import Header from "./header"
import Navigation from "./Navigation"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [stickyNav, setStickyNav] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const onEnterHandler = () => {
    setStickyNav(false)
  }

  const onLeaveHandler = () => {
    setStickyNav(true)
  }

  return (
    <>
      <Header />
      <Navigation stickyNav={stickyNav} />
      <Waypoint onEnter={onEnterHandler} onLeave={onLeaveHandler} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
