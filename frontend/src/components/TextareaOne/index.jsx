import React from "react"
import {
  SectionH2,
  SectionContainer,
  SectionPadding,
  ContainerWrapper
} from "styles/GlobalStyles"

export default function index() {
  return (
    <>
      <div className='w-screen' id="experience">
      <ContainerWrapper>
        <SectionContainer className='bg-[#a19183]'>
          <SectionPadding>
            <SectionH2 data-aos="fade-up" className='text-white'>
                Having to work with clients on web projects from ideation to launch,<br />
                I have valuable experience in web design and full stack development process.
            </SectionH2>
          </SectionPadding>
        </SectionContainer>
      </ContainerWrapper>
      </div>
    </>
  )
}
