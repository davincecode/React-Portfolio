import Hero from "components/Hero"
import TextareaOne from "components/TextareaOne"
import Quote from "components/Quotes"
import Work from "components/Work"
import Features from "components/Features"
// import Data from "../Data/projects"

export default function Home() {
  return (
    <>
      <Hero />
      <TextareaOne />
      <Work />
      <Quote />
      <Features />
      {/* <Data /> */}
    </>
  )
}
