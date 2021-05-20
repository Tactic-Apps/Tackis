import React, { useState, useEffect } from "react"

import "../assets/styles/carousel.css"

type Size = {
  /** Width of the browser window in pixels */
  windowWidth: number | undefined
}

// Custom Hook to determine the window size so we can compare it to the responsive Tailwind v2 breakpoints
function useWindowSize(): Size {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    windowWidth: undefined,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        windowWidth: window.innerWidth,
      })
    }
    // Add event listener
    window.addEventListener("resize", handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

type ResponsiveProperties = {
  /** Tailwind v2 breakpoints. Example: breakpoint='md'*/
  breakpoint: "2xl" | "xl" | "lg" | "md" | "sm"
  /** The amount of slides to show formatted as a number. Example: slidesToShow={2} */
  slidesToShow: number
  /** Should slide dots be displayed?. Example: dots={false} */
  dots: boolean
}

export type Settings = {
  /** The amount of slides to show formatted as a number. Default is 1. Example: slidesToShow={2} */
  slidesToShow?: number
  /** Should slide dots be displayed? Default is true. Example: dots={false} */
  dots?: boolean
  /** Responsive settings to adjust number of slides to show based on Tailwind v2 breakpoints. Must be ordered from smallest to largest breakpoints */
  responsive?: ResponsiveProperties[]
  /** This Carousel requires at least 2 HTML elements */
  children?: React.ReactNodeArray
}

const Carousel = ({
  slidesToShow = 1,
  dots = true,
  responsive,
  children,
}: Settings): React.ReactElement => {
  // State for radio button checked
  const [checked, setChecked] = useState("carousel-1")
  // State for window width in pixels received from custom hook
  const { windowWidth } = useWindowSize()

  // State to monitor swipe action on mobile
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Breakpoints in pixels as defined by Tailwindcss v2
  const tailwindBreakpoints = {
    sm: 640,
    // => @media (min-width: 640px) { ... }

    md: 768,
    // => @media (min-width: 768px) { ... }

    lg: 1024,
    // => @media (min-width: 1024px) { ... }

    xl: 1280,
    // => @media (min-width: 1280px) { ... }

    "2xl": 1536,
    // => @media (min-width: 1536px) { ... }
  }

  // Initialize the final slides and dots values based on both the standard and responsive settings
  let totalSlidesToShow = slidesToShow
  let totalDots = dots

  // Loop through the responsive settings array and set the slidesToShow and dots display according to tailwind breakpoints
  responsive?.forEach(settings => {
    for (let key in tailwindBreakpoints) {
      if (settings.breakpoint === key) {
        if (windowWidth >= tailwindBreakpoints[key]) {
          totalSlidesToShow = settings.slidesToShow
          totalDots = settings.dots
          break
        }
      }
    }
  })

  // Create an array of arrays based on the amount of HTML elements that are passed as children.
  let slideContent = [...Array(children.length)].map(() =>
    Array(children.length)
  )

  // Fill the slideContent array based on the quantity of HTML elements and how many of them to show per slide
  let k = 0
  children.forEach((child, i) => {
    for (let j = 1; j <= children.length / totalSlidesToShow; j++) {
      if (i < totalSlidesToShow * j) {
        slideContent[k].push(child)
        break
      } else k++
    }
  })

  // Mobile touch handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  // When the touch ends then evaluate the touch start and end then do something depending on the direction
  const handleTouchEnd = (i: number) => {
    if (touchStart - touchEnd > 150) {
      // do your stuff here for left swipe
      setChecked(`carousel-${i < 1 ? children.length : i}`)
    }

    if (touchStart - touchEnd < -150) {
      // do your stuff here for right swipe
      setChecked(`carousel-${i + 1 === children.length ? 1 : i + 2}`)
    }
  }

  let slides = [],
    bullets = []

  // Create the slides by inserting the slideContent above and also create the optional bullets
  for (let i = 0; i < children.length / totalSlidesToShow; i++) {
    slides.push(
      <>
        <input
          className="carousel-open hidden"
          type="radio"
          id={`carousel-${i + 1}`}
          name="carousel"
          aria-hidden="true"
          hidden
          checked={checked === `carousel-${i + 1}` ? true : false}
        />
        <div
          className="carousel-item absolute opacity-0"
          onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
          onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
          onTouchEnd={() => handleTouchEnd(i)}
        >
          {slideContent[i]}
        </div>
        <button
          className={`prev control-${
            i + 1
          } w-10 h-10 md:ml-0 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-white rounded-full bg-primary hover:bg-primary-dark leading-tight text-center z-10 inset-y-0 -left-14 my-auto focus:outline-none`}
          onClick={() => setChecked(`carousel-${i < 1 ? children.length : i}`)}
        >
          ‹
        </button>
        <button
          className={`next control-${
            i + 1
          } w-10 h-10 mr-2 mr-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-white rounded-full bg-primary hover:bg-primary-dark leading-tight text-center z-10 inset-y-0 -right-24 my-auto focus:outline-none`}
          onClick={() =>
            setChecked(`carousel-${i + 1 === children.length ? 1 : i + 2}`)
          }
        >
          ›
        </button>
      </>
    )

    totalDots &&
      bullets.push(
        <li className="inline-block mr-3">
          <button
            className="carousel-bullet cursor-pointer block text-4xl text-gray hover:text-primary-dark focus:outline-none"
            onClick={() => setChecked(`carousel-${i + 1}`)}
          >
            •
          </button>
        </li>
      )
  }

  return (
    <div className="carousel relative shadow-2xl bg-white">
      <div className="carousel-inner relative w-full">
        {slides}
        {/* <!-- Add additional indicators for each slide--> */}

        {totalDots && <ol className="carousel-indicators">{bullets}</ol>}
      </div>
    </div>
  )
}

export default Carousel
