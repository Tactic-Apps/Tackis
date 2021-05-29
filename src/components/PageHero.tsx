import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const PageHero = ({
  title,
  pageContext,
  location,
  crumbLabel,
}: {
  title: string
  pageContext?: any
  location?: any
  crumbLabel?: string
}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <section id="PageHero" className="relative overflow-hidden h-60">
      <StaticImage
        src="../assets/images/hero.jpg"
        alt="Hero image"
        placeholder="blurred"
        layout="fullWidth"
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="absolute w-screen top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
        <div className="container grid grid-cols-2 gap-4">
          <div className="col-span-2 xl:col-span-1 text-white">
            <h2 className="capitalize mb-3">{title}</h2>
            <Breadcrumb
              crumbs={crumbs}
              crumbSeparator=" > "
              crumbLabel={crumbLabel}
              location={location}
              hiddenCrumbs={["/services"]}
              disableLinks={[location.pathname.toLowerCase()]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
