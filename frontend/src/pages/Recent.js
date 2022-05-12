import React from "react"
import { NewProjects } from "components/NewProjects/NewProjects"
import { SectionH2 } from "styles/GlobalStyles"

const recent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-8 bg-[#a19183] text-white">
        <SectionH2>RECENT PROJECTS</SectionH2>
      </div>
      <NewProjects />
    </>
  )
}

export default recent
