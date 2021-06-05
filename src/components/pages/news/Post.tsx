import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

import UserIcon from "../../../assets/icons/person.svg"
import ClockIcon from "../../../assets/icons/access_time.svg"
import FolderIcon from "../../../assets/icons/folder.svg"
import FacebookIcon from "../../../assets/icons/facebook-color.svg"
import TwitterIcon from "../../../assets/icons/twitter-color.svg"
import LinkedInIcon from "../../../assets/icons/linkedin-color.svg"
import RedditIcon from "../../../assets/icons/reddit-color.svg"
import MailIcon from "../../../assets/icons/mail-color.svg"

type PostProps = {
  /** The data returned from an image query. Example data.image or use destructuring and pass image. */
  image: any
  /** Image alt */
  alt: string
  /** Author name */
  author: string
  /** Date as a string */
  date: string
  /** Post heading */
  heading: string
  /** Category of post */
  category: string
  /** Content as a JSX element. Example: <p>Hello</p> */
  content: JSX.Element
}

type Props = {
  postDetails: PostProps
}

const Post = ({ postDetails }: Props) => {
  return (
    <section id="news-post">
      <div className="container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <GatsbyImage
              image={getImage(postDetails.image)!}
              alt={postDetails.alt}
              className="mb-5"
            />
            <div className="flex items-center mb-5">
              <UserIcon className="w-5 h-5 fill-current text-primary mr-1" />
              <p className="mr-5 text-sm">{postDetails.author}</p>
              <ClockIcon className="w-5 h-5 fill-current text-primary mr-1" />
              <p className="mr-5 text-sm">{postDetails.date}</p>
              <FolderIcon className="w-5 h-5 fill-current text-primary mr-1" />
              <p className="text-sm">{postDetails.category}</p>
            </div>
            <div className="prose max-w-full">{postDetails.content}</div>
            <div className="flex my-4 justify-end">
              <FacebookIcon className="w-6 h-6 mr-3 hover:cursor-pointer" />
              <TwitterIcon className="w-6 h-6 mr-3 hover:cursor-pointer" />
              <LinkedInIcon className="w-6 h-6 mr-3 hover:cursor-pointer" />
              <RedditIcon className="w-6 h-6 mr-3 hover:cursor-pointer" />
              <MailIcon className="w-6 h-6 mr-3 hover:cursor-pointer" />
            </div>
            <div className="flex justify-between border-t border-b border-gray-200 py-3 my-5">
              <Link
                to=""
                className="font-bold hover:text-primary mr-3 transition-colors duration-300 flex items-center"
              >
                <p className="text-2xl text-current mr-2 pb-1">&#171;</p>
                <p className="text-current">Prev Post </p>{" "}
              </Link>

              <Link
                to=""
                className="font-bold hover:text-primary mr-3 transition-colors duration-300 flex items-center"
              >
                <p className="mr-2 text-current">Next Post </p>{" "}
                <p className="text-2xl text-current pb-1">&#187;</p>
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="relative mb-5 pb-2 border-b border-gray-200">
                <div className="absolute h-px -bottom-px left-0 bg-primary w-1/4" />
                Popular Posts
              </h3>
              <div className="flex mb-4">
                <StaticImage
                  src="../../../assets/images/news/gamer.jpg"
                  alt="Gamer"
                  width={80}
                  height={80}
                  layout="fixed"
                  className="mr-4"
                />
                <div className="flex-1">
                  <p className="uppercase text-xs mb-1">June 16, 2020</p>
                  <Link
                    to=""
                    className="hover:text-primary transition-colors duration-300"
                  >
                    <h4>Ping vs Latency: What you should know as a gamer.</h4>
                  </Link>
                </div>
              </div>
              <div className="flex mb-4">
                <StaticImage
                  src="../../../assets/images/news/parental-control.jpg"
                  alt="Parental Control"
                  width={80}
                  height={80}
                  layout="fixed"
                  className="mr-4"
                />
                <div className="flex-1">
                  <p className="uppercase text-xs mb-1">June 16, 2020</p>
                  <Link
                    to=""
                    className="hover:text-primary transition-colors duration-300"
                  >
                    <h4>
                      How to protect your kids online with parental controls.
                    </h4>
                  </Link>
                </div>
              </div>
              <div className="flex mb-4">
                <StaticImage
                  src="../../../assets/images/news/neighborhood.jpg"
                  alt="Lake Austin"
                  width={80}
                  height={80}
                  layout="fixed"
                  className="mr-4"
                />
                <div className="flex-1">
                  <p className="uppercase text-xs mb-1">June 16, 2020</p>
                  <Link
                    to=""
                    className="hover:text-primary transition-colors duration-300"
                  >
                    <h4>
                      Tackis is expanding into Lake Austin so register today!
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="relative mb-5 pb-2 border-b border-gray-200">
                <div className="absolute h-px -bottom-px left-0 bg-primary w-1/4" />
                Recent Posts
              </h3>
              <ul className="list-inside">
                <li className="relative pl-4 font-bold mb-4">
                  <div className="absolute left-0 top-2 h-2 w-2 bg-primary transform"></div>
                  <Link
                    to=""
                    className="hover:text-primary transition-colors duration-300"
                  >
                    Ping vs Latency: What you should know as a gamer.
                  </Link>
                </li>
                <li className="relative pl-4 font-bold mb-4">
                  <div className="absolute left-0 top-2 h-2 w-2 bg-primary transform"></div>
                  <Link
                    to=""
                    className="hover:text-primary transition-colors duration-300"
                  >
                    How to protect your kids online with parental controls.
                  </Link>
                </li>
                <li className="relative pl-4 font-bold mb-4">
                  <div className="absolute left-0 top-2 h-2 w-2 bg-primary transform"></div>
                  <Link
                    to=""
                    className="hover:text-primary transition-colors duration-300"
                  >
                    Tackis is expanding into Lake Austin so register today!
                  </Link>
                </li>
                <li className="relative pl-4 font-bold mb-4">
                  <div className="absolute left-0 top-2 h-2 w-2 bg-primary transform"></div>
                  <Link
                    to=""
                    className="hover:text-primary transition-colors duration-300"
                  >
                    How to keep your personal data safe from malware and
                    hackers.
                  </Link>
                </li>
                <li className="relative pl-4 font-bold mb-4">
                  <div className="absolute left-0 top-2 h-2 w-2 bg-primary transform"></div>
                  <Link
                    to=""
                    className="hover:text-primary transition-colors duration-300"
                  >
                    Why does Tackis ask you to bring your own router?
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="relative mb-5 pb-2 border-b border-gray-200">
                <div className="absolute h-px -bottom-px left-0 bg-primary w-1/4" />
                Categories
              </h3>
              <ul className="list-inside">
                <li className="relative pl-4 font-bold mb-4">
                  <div className="absolute left-0 top-2 h-2 w-2 bg-primary transform"></div>
                  <Link
                    to=""
                    className="hover:text-primary transition-colors duration-300"
                  >
                    Community
                  </Link>
                </li>
                <li className="relative pl-4 font-bold mb-4">
                  <div className="absolute left-0 top-2 h-2 w-2 bg-primary transform"></div>
                  <Link
                    to=""
                    className="hover:text-primary transition-colors duration-300"
                  >
                    News
                  </Link>
                </li>
                <li className="relative pl-4 font-bold mb-4">
                  <div className="absolute left-0 top-2 h-2 w-2 bg-primary transform"></div>
                  <Link
                    to=""
                    className="hover:text-primary transition-colors duration-300"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Post
