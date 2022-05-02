import React from "react"
import { Projects } from "components/Projects"
import { SectionH2 } from "styles/GlobalStyles"

const recent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-8 bg-[#eeede8]">
        <SectionH2>RECENT WORK</SectionH2>
      </div>
      <Projects />
    </>
  )
}

export default recent
