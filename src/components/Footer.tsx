import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import FacebookIcon from "../assets/icons/facebook.svg"
import Twitter from "../assets/icons/twitter.svg"
import LinkedIn from "../assets/icons/linkedin.svg"

const Footer = () => {
  return (
    <section id="Footer" className="bg-gray pt-20 pb-6">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-16 text-white">
        <div>
          <Link to="/">
            <StaticImage
              src="../assets/images/logo.png"
              alt="Tackis Logo"
              placeholder="blurred"
              layout="fixed"
              width={140}
              height={40}
            />
          </Link>
          <p className="text-white text-sm mt-5">
            We are a Fiber Internet Service Provider providing fast, reliable
            internet service to Austin Texas. Our simple billing plans have no
            contracts or hidden fees and will remain the same as the day you
            signed up.
          </p>
        </div>
        <div>
          <h3>Navigation</h3>
          <ul className="mt-5">
            <li>
              <Link to="/myaccount" className="hover:text-primary">
                My Account
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-primary">
                Register
              </Link>
            </li>
            <li>
              <Link to="/internet" className="hover:text-primary">
                Internet
              </Link>
            </li>
            <li>
              <Link to="/streaming" className="hover:text-primary">
                TV & Streaming
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul className="mt-5">
            <li>
              <Link to="/blog" className="hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/communities" className="hover:text-primary">
                Community Status
              </Link>
            </li>
            <li>
              <Link to="/network" className="hover:text-primary">
                Network Check
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Get In Touch</h3>
          <div className="mt-5 text-sm">
            <Link to="tel:8002147435" className="text-primary block mb-2">
              800.214.7435
            </Link>
            201 Manhattan Place, Suite 2201
            <br />
            Cherrywood, TX 72281 <br />
          </div>
          <div className="flex mt-3">
            <FacebookIcon className="w-6 h-6 fill-current mr-3 hover:text-primary hover:cursor-pointer" />
            <Twitter className="w-6 h-6 fill-current mr-3 hover:text-primary hover:cursor-pointer" />
            <LinkedIn className="w-6 h-6 fill-current mr-3 hover:text-primary hover:cursor-pointer" />
          </div>
        </div>
      </div>
      <p className="text-sm border-t border-gray-light mt-20 text-white text-center pt-6">
        © Copyright Tackis {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </section>
  )
}

export default Footer
