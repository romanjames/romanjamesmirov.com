import React from "react"
import { Helmet } from "react-helmet"

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
          You can also reach me here:{" "}
        </p>
        <form action="post">
          <input type="email" name="email" placeholder="Your email" />
          <textarea name="message" rows="10" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <section className="showcase">
        <h2>...my portfolio also includes</h2>
        <div>
          <a href="#">
            <i>☼</i>staysafesacramento.com
          </a>
          <a href="#">
            <figure>
              <div></div>
              <figcaption>
                a pandemic relief platform to connect people who have and people
                who need
              </figcaption>
            </figure>
          </a>
        </div>
        <div>
          <a href="#">
            "blogster"<i>☼</i>
          </a>
          <a href="#">
            <figure>
              <div></div>
              <figcaption>
                a minimalist... you guessed it... blogging platform. go ahead,
                make a test account and post something.
              </figcaption>
            </figure>
          </a>
        </div>
        <div>
          <a href="#">
            <i>☼</i>"impetus"
          </a>
          <a href="#">
            <figure>
              <div></div>
              <figcaption>
                toggle on and off the tasks you do throughout the day and see
                auto-generated charts showing where your time goes
              </figcaption>
            </figure>
          </a>
        </div>
      </section>
      <footer>
        <a href="#">go back up</a>
        <div>
          twitter github linkedin youtube instagram codepen medium facebook
          pinterest
        </div>
        <p>© Roman Mirov 2020</p>
      </footer>
    </div>
  )
}
