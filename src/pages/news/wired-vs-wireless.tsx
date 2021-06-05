import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import PageHero from "../../components/PageHero"
import Seo from "../../components/seo"
import Post from "../../components/pages/news/Post"

const WiredVSWirelessPage = ({
  pageContext,
  location,
}: {
  pageContext: any
  location: any
}) => {
  const { ethernet } = useStaticQuery(
    graphql`
      query {
        ethernet: file(relativePath: { eq: "news/ethernet.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

  const postDetails = {
    image: ethernet,
    alt: "Wired or Wireless",
    author: "Melissa Phuong",
    date: "June 1, 2020",
    heading: "Wired vs Wireless: Which one should you choose for your home?",
    category: "Blog",
    content: (
      <>
        <p>
          Wireless networking has predominantly become more popular over the
          past few years, with advancements in technology, wireless speeds are
          getting closer to matching those of wired and many homes and
          businesses are implementing them into their network.
        </p>
        <p>
          Whilst wireless certainly offer flexibility and convenience there are
          also many other important factors to consider when using them in place
          of wired networks.
        </p>
        <p>
          <strong>Speed</strong> - We are becoming far more impatient when it
          comes to data transfer and speed is certainly of the essence when in
          networking. Many wired networks are being upgraded to gigabit since a
          lot of hardware nowadays is gigabit ready and a lot of cabling is
          gigabit compliant. Wireless on the other hand is unlikely to ever
          match the speeds offering by wired. Wireless N boasts speeds of
          300mbps. Of course in a typical environment you are only likely to get
          around a third of this.
        </p>
        <p>
          Another point to consider with the speeds is the fluctuation.
          Transferring over a wire will normally give you a steady and
          consistent speed; the same cannot always be said for wireless.
          Interference and signal drops means that transfer speeds can jump up
          and down a lot with wireless.
        </p>
        <p>
          <strong>Reliability</strong> - Moving on from the point above wireless
          networks are far more prone to suffering from reliability issues. Due
          to there being no physical medium, data has to transfer through the
          air and must pass through any surface in its path. This means that
          signals can get blocked and deflected and this means your connection
          can suffer or even drop.
        </p>
        <p>
          Even large distributed wireless networks can suffer from these
          problems and without careful planning of where access points are
          located wireless can be a nightmare for connection problems. On the
          other hand wired networks rely on physical cabling that will stay in
          the same location and have a long life span. Cabling rarely ever fails
          in networking and this means you get the same speeds and performance
          day in, day out for many years.
        </p>
        <p>
          <strong>Security</strong> - One of the biggest concerns in regards to
          wireless network is proper security procedures. Because data is
          transferred through the air it can easily be intercepted. Strong
          encryption (WPA/WPA2) means that data is unreadable unless you have
          the correct key. However, many wireless network still remain unsecure
          or with weak WEP encryption and are prone to security breaches.
        </p>
        <p>
          Wired networks do not face this problem, physical access can only be
          obtained by somebody who has access to the infrastructure, a wireless
          network on the other hand can be access from outside a building, in a
          car park for example!
        </p>
        <p>
          As you can see there are many considerations to make when deciding
          whether to use wired or wireless networks. A mixture of both can be
          very effective with the right security procedures put in place. It
          would be quite foolish for any company to completely replace their
          wired network with a wireless one.
        </p>
      </>
    ),
  }
  return (
    <Layout>
      <Seo title="Wired vs Wireless" />
      <PageHero
        title="Wired vs Wireless: Which one should you choose for your home?"
        pageContext={pageContext}
        location={location}
        crumbLabel="Wired vs Wireless"
      />
      <Post postDetails={postDetails} />
    </Layout>
  )
}

export default WiredVSWirelessPage
