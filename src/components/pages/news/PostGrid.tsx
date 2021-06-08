import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import UserIcon from "../../../assets/icons/person.svg"
import ClockIcon from "../../../assets/icons/access_time.svg"

type PostProps = {
  image: any
  alt: string
  author: string
  date: string
  heading: string
  snippet: string
  link: string
}

type Props = {
  postsArray: PostProps[]
}

const Post = ({ postsArray }: Props) => {
  let posts = postsArray.map(post => (
    <div key={Math.random()} className="bg-white shadow-lg overflow-hidden">
      <div className="overflow-hidden">
        <Link to={post.link}>
          <GatsbyImage
            image={getImage(post.image)!}
            alt={post.alt}
            className="mb-1 hover:transform-gpu hover:scale-125 transition-transform ease-in duration-300"
          />
        </Link>
      </div>
      <div className="p-8">
        <div className="flex items-center mb-5">
          <UserIcon className="w-5 h-5 fill-current text-primary mr-1" />
          <p className="mr-5 text-sm">{post.author}</p>
          <ClockIcon className="w-5 h-5 fill-current text-primary mr-1" />
          <p className="text-sm">{post.date}</p>
        </div>
        <Link to={post.link}>
          <h3 className="mb-4">{post.heading}</h3>
        </Link>
        <p className="mb-3">{post.snippet}</p>
        <Link
          to={post.link}
          className="flex items-center hover:text-primary transition-colors duration-300"
        >
          <p className="font-bold mr-2 text-current">Read More</p>
          <p className="font-bold text-2xl text-current pb-1">&#187;</p>
        </Link>
      </div>
    </div>
  ))
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {posts}
    </div>
  )
}

export default Post
