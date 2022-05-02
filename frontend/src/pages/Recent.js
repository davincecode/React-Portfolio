/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import {
  FullContainer,
  TwoColContainer,
  SectionH2,
  SectionWrapper,
  LeftCol,
  RightCol,
  H2Left,
  DividerCol,
  DividerRow,
} from "../styles/GlobalStyles"

export default function recent() {
  return (
    <>
      <FullContainer>
        <div className="flex flex-col items-center justify-center p-8">
          <SectionH2>RECENT WORK</SectionH2>
        </div>
        <TwoColContainer>
          <SectionWrapper>
            <LeftCol>
              <img src="/images/triplex.gif" />
            </LeftCol>
            <DividerRow />
            <RightCol>
              <H2Left>Triplex Movies</H2Left>
              <p>
                A Netflix inspired app with a discussion forum. It's an online
                movie streaming service where a user can write a good in-depth
                review and detailed analysis of the film. In addition, each user
                will be able to store the movies they want to watch in a watch
                list. Each user will be able to rate and review each movie as
                well. This app was deployed on Heroku.
                <br />
                Tech Stack: Node, Express, ElephantSQL, React, Axios, Userfront,
                Sass.
              </p>
              <hr className="flex items-center justify-between w-full mx-auto my-4 border-t border-neutral-300 " />
              <div className="flex justify-start gap-x-8">
                <a
                  href="https://triplex-lhl.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-solid fa-globe"></i>
                </a>
                <a
                  href="https://github.com/davincecode/triplex-movie-streaming"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </RightCol>
          </SectionWrapper>
        </TwoColContainer>
        <DividerCol />
        <TwoColContainer>
          <SectionWrapper>
            <LeftCol>
              <img src="/images/add.gif" />
            </LeftCol>
            <DividerRow />
            <RightCol>
              <H2Left>Interview Scheduler</H2Left>
              <p>
                A simple interview appointment scheduling tool. A single-page
                web app design using React that allows anyone to add, edit and
                delete interviews. It does not include user account management,
                but stores schedule information in a database. <br />
                Tech Stack: Node, Express, React, Axios, PostgreSQL, Cypress.
              </p>
              <hr className="flex items-center justify-between w-full mx-auto my-4 border-t border-neutral-300 " />
              <div className="flex justify-start gap-x-8">
                <a
                  href="https://github.com/davincecode/scheduler"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </RightCol>
          </SectionWrapper>
        </TwoColContainer>
        <DividerCol />
        <TwoColContainer>
          <SectionWrapper>
            <LeftCol>
              <img src="/images/weddingphoto.gif" />
            </LeftCol>
            <DividerRow />
            <RightCol>
              <H2Left>Wedding Photography</H2Left>
              <p>
                A Professional Wedding Photographer's Portfolio Website built
                using WordPress. It is a fully responsive website that allows
                users to view and manage thier photos. This website ranked #1 in
                Google on local search.
                <br />
                <i>
                  Plugins: Yoast SEO, Site Kit by Google, WP Rocket, Facebook
                  Pixel, Google Analytics, Google Tag Manager, Google Adsense.
                </i>
              </p>
              <hr className="flex items-center justify-between w-full mx-auto my-4 border-t border-neutral-300 " />
              <div className="flex justify-start gap-x-8">
                <a
                  href="https://vincentybanez.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-solid fa-globe"></i>
                </a>
              </div>
            </RightCol>
          </SectionWrapper>
        </TwoColContainer>
        <DividerCol />
        <TwoColContainer>
          <SectionWrapper>
            <LeftCol>
              <img src="/images/weddingvideo.gif" />
            </LeftCol>
            <DividerRow />
            <RightCol>
              <H2Left>Wedding Cinematography</H2Left>
              <p>
                A Professional Cinematographer's Portfolio Website that fetches
                youtube API for video highlights. It is a fully responsive
                website that allows users to view and download thier wedding
                films. This app was deployed on Netlify. <br />
                Tech Stack: Gatsby, React, GraphQL, Instagram API,
                Styled-Components.
              </p>
              <hr className="flex items-center justify-between w-full mx-auto my-4 border-t border-neutral-300 " />
              <div className="flex justify-start gap-x-8">
                <a
                  href="https://storygridfilms.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-solid fa-globe"></i>
                </a>
                <a
                  href="https://github.com/davincecode/Story-Grid-Films"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </RightCol>
          </SectionWrapper>
        </TwoColContainer>
        <DividerCol />
        <TwoColContainer>
          <SectionWrapper>
            <LeftCol>
              <img src="/images/twitter.gif" />
            </LeftCol>
            <DividerRow />
            <RightCol>
              <H2Left>Tweeter Project</H2Left>
              <p>
                Tweeter is a simple, single-page Twitter clone. Tech Stack used
                to build this project are HTML, CSS, JS, jQuery and AJAX for the
                frontend, and Node, Express, body-parser for the backend.
              </p>
              <hr className="flex items-center justify-between w-full mx-auto my-4 border-t border-neutral-300 " />
              <div className="flex justify-start gap-x-8">
                <a
                  href="https://github.com/davincecode/tweeter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </RightCol>
          </SectionWrapper>
        </TwoColContainer>
        <DividerCol />
        <TwoColContainer>
          <SectionWrapper>
            <LeftCol>
              <img src="/images/tinyapp.png" />
            </LeftCol>
            <DividerRow />
            <RightCol>
              <H2Left>Tiny App Project</H2Left>
              <p>
                TinyApp is a full stack web application that allows users to
                shorten long URLs (similar to bit.ly). TinyApp is built with
                Node and Express for the backend and HTML, EJS and Bootsrap for
                the frontend.
              </p>
              <hr className="flex items-center justify-between w-full mx-auto my-4 border-t border-neutral-300 " />
              <div className="flex justify-start gap-x-8">
                <a
                  href="https://github.com/davincecode/tinyapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </RightCol>
          </SectionWrapper>
        </TwoColContainer>
        <DividerCol />
      </FullContainer>
    </>
  )
}
