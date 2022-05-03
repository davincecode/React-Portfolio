import Hero from "components/Hero"
import TextareaOne from "components/TextareaOne"
import Quote from "components/Quotes"
import Experience from "components/Experience"
import Features from "components/Features"
// import Data from "../Data/projects"

export default function Home() {
  return (
    <>
      <Hero />
      <TextareaOne />
      <Experience />
      <Quote />
      <Features />
      {/* <Data /> */}
    </>
  )
}
