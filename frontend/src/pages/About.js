/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { Link } from "react-router-dom"
import { FullContainer, HeroElements, Button } from "../styles/GlobalStyles"

export default function About() {
  return (
    <>
      <FullContainer>
        <HeroElements>
          <img className="w-[500px] md:w-[350px] " src="/images/motor.jpg" />

          <div className="flex-wrap items-center justify-center w-full p-8 text-xl tracking-wide md:p-0 md:w-2/5 md:text-lg font-millerLight md:leading-loose">
            <h1 className="mt-8 text-3xl font-millerItalic ">
              Thanks for being here!
            </h1>
            <br />
            My name is Vince! I'm a full-stack web developer with a passion for
            building and designing beautiful, responsive websites.
            <div className="mt-4">
              If you're interested in working together, please reach out!
              <br /> I'd love to chat about your next project.
              <Link to="/recent">
                <Button>RECENT WORK</Button>
              </Link>
            </div>
          </div>
        </HeroElements>
      </FullContainer>
    </>
  )
}
