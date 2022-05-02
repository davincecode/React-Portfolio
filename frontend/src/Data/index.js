import React from "react"
import Projects from "components/Projects"
import { ContainerWrapper, SectionTitle } from "../styles/GlobalStyles"

export default function index() {
  return (
    <ContainerWrapper>
      <SectionTitle>RECENT WORK</SectionTitle>
      <div className="flex flex-row flex-wrap gap-8">
        <Projects image="./images/art.jpg" />
        <Projects image="./images/art.jpg" />
        <Projects image="./images/art.jpg" />
        <Projects image="./images/art.jpg" />
        <Projects image="./images/art.jpg" />
        <Projects image="./images/art.jpg" />
      </div>
    </ContainerWrapper>
  )
}
