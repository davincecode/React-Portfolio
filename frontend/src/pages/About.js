/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { HeroContainer, HeroElements, Button } from "Styles/GlobalStyles"

export default function About() {
  return (
    <>
      <HeroContainer>
        <HeroElements>
          <img className="w-[500px] " src="/images/motor.jpg" />

          <div className="flex-wrap items-center justify-center w-full p-8 text-lg tracking-wide md:w-2/5 md:text-xl font-millerLight md:leading-loose">
            <h1 className="mt-8 text-2xl font-millerLight ">
              Welcome to my humble website!
            </h1>
            <br />
            My name is Vince! I'm a full-stack web developer with a passion for
            building and designing beautiful, responsive websites. If you're
            interested in working together, please reach out! I'd love to chat
            about your next project.
            <a href="#one">
              <Button>LEARN MORE</Button>
            </a>
          </div>
        </HeroElements>
      </HeroContainer>
    </>
  )
}
