import React from "react"
import { Helmet } from "react-helmet"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
  faYoutube,
  faInstagram,
  faCodepen,
  faMediumM,
  faFacebookF,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons"

import ProfileImage from "../../static/profile-400x400.jpg"
import CodeThinkingImage from "../../static/code-thinking.svg"
import BloggingImage from "../../static/blogging.svg"

export default function Home() {
  return (
    <div id="index-page">
      <Helmet bodyAttributes={{ class: "orange-background" }} />

      <h1 className="hello">
        Hello! My name is Roman. <br />
        Nice to meet you.
      </h1>

      <section className="hand-wave">
        <h2>👋🏼</h2>
      </section>

      <section className="check-it-out">
        <h2>OK, so check this out:</h2>
        <figure>
          <a href="#">
            <div></div>
          </a>
          <figcaption>
            I made this blogging platform for a social worker who wants to share
            her stories about interesting people.{" "}
          </figcaption>
        </figure>
        <p>
          See it live at <a href="#">allyseweaver.com</a>
        </p>
      </section>

      <section className="reach-out">
        <h2>I'm a developer of blogs.</h2>
        <p>
          Would you like one for yourself? I'm <span>@romanjamesdev</span> on
          every social network.
          <br />
          <br />
          You can also reach me here:
        </p>
        <form action="post">
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <section className="portfolio-continued">
        <h2>My portfolio also includes:</h2>
        <figure>
          <a href="#">
            <div></div>
          </a>
          <figcaption>
            After COVID-19 was declared a pandemic, I made this platform to
            connect people who need supplies with people who have them.
          </figcaption>
        </figure>
        <p>
          You can make a fake account to try it out at{" "}
          <a href="#">staysafesacramento.com</a>
        </p>

        <figure>
          <a href="#">
            <div></div>
          </a>
          <figcaption>
            Not a blog, but a blogging platform for anyone and everyone. I love
            platforms. This is my earliest project listed here.
          </figcaption>
        </figure>
        <p>
          Go ahead, make a test account and post something at{" "}
          <a href="#">fathomless-island-56591.herokuapp.com</a>
        </p>

        <figure>
          <a href="#">
            <div></div>
          </a>
          <figcaption>
            A task tracker that graphs your activity over time. Just add your
            tasks, toggle them on and off throughout the day, and see what your
            graph has to reveal about you!
          </figcaption>
        </figure>
        <p>
          Try doing it for one whole week at{" "}
          <a href="#">romanjamesmirov-impetus.herokuapp.com</a>
        </p>
      </section>

      <section>
        <h2>Curious about coding?</h2>
        <p>Well I have a blog for you!</p>
        <p>(coming soon)</p>
      </section>

      <section>
        <h2>And finally, some doodles.</h2>
        <p>(coming soon)</p>
      </section>

      <footer>
        <a className="back-to-top" href="#">
          <FontAwesomeIcon icon={faChevronCircleUp} />
        </a>
        <ul>
          <li>
            <a className="twitter" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a className="github" href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a className="linkedin" href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a className="youtube" href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a className="instagram" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a className="codepen" href="#">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </li>
          <li>
            <a className="medium" href="#">
              <FontAwesomeIcon icon={faMediumM} />
            </a>
          </li>
          <li>
            <a className="facebook" href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a className="pinterest" href="#">
              <FontAwesomeIcon icon={faPinterestP} />
            </a>
          </li>
        </ul>
        <p>© Roman James 2020</p>
      </footer>
    </div>
  )
}
