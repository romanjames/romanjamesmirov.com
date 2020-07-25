import React, { useState, useEffect } from "react"
import IndexWrapper from "../components/IndexWrapper"
import AOS from "aos"
import styles from "./index.module.scss"
import ProfileImage from "../../static/profile-400x400.jpg"
import CodeThinkingImage from "../../static/code-thinking.svg"
import BloggingImage from "../../static/blogging.svg"

export default function Home() {
  useEffect(() => {
    AOS.init()
    // document.addEventListener("scroll", () => setScrollSpanOpacity(styles.))
  }, [])

  return (
    <IndexWrapper>
      <section className={styles.helloSection}>
        <h1>hi! i am roman.</h1>
        <p>
          <span>scroll </span>
          <span role="img" aria-label="Finger pointing down emoji">
            👇
          </span>
        </p>
      </section>
      <section className={styles.bioCardSection}>
        <div>
          <div>
            <img src={ProfileImage} alt="My profile image" />
          </div>
          <div>
            <h3>@romanjamesmirov</h3>
            <p>Web Developer Specializing in Blogs and Social Platforms</p>
          </div>
        </div>
      </section>
      <section className={styles.descriptionSection}>
        <h2 className={styles.bigH2}>i build blogs.</h2>
        <div>
          <p>
            designing and programming
            <br /> websites from scratch
            <br /> is my thing.
          </p>
          <img src={CodeThinkingImage} alt="Thinking about websites in code" />
        </div>
      </section>
      <section className={styles.socialWorkerBlogSection}>
        <h2 className={styles.bigH2}>
          here's one i created for a social worker
        </h2>
        <div>
          <i>☼</i>
          <a href="#">allyseweaver.com</a>
          <figure>
            <div></div>
            <figcaption>
              Stories about people. From a long-time social worker.
            </figcaption>
          </figure>
        </div>
        <img src={BloggingImage} alt="Writing a blog post" />
      </section>
    </IndexWrapper>
  )
}
