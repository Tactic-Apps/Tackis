module.exports = {
  siteMetadata: {
    title: `Tackis`,
    description: `Tackis is a Fiber Internet provider in Austin Texas with fast speeds and predictable billing.`,
    author: `@tacticapps`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tackis`,
        short_name: `Tackis`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#5bc500`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo-large.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets/icons`,
        },
      },
    },
  ],
}
