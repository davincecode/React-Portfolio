/* eslint-disable jsx-a11y/alt-text */
import { Projects } from 'components/Projects/Projects';
import React from "react"
import {
  ContainerWrapper,
  WorkBoxWrapper,
  SectionTitle,
  SectionH2
} from "../../styles/GlobalStyles"

const index = () => {
  return (
    <>
    
      <ContainerWrapper>
        <SectionTitle>EXPERIENCE</SectionTitle>
        <WorkBoxWrapper>
          <div className='p-8 mt-8 font-miller' data-aos="fade-up">
            
          <h1 className='text-2xl'>Lighthouse Labs, Student, 2022​</h1><br />
              <ul className='mb-12 text-lg leading-relaxed font-millerLight'>
                <li>- Collaborated with a team of software engineers to create full-stack responsive web applications.</li>
                <li>- Utilized modern frameworks and libraries such as React, Ruby, Express, NodeJs, PostgreSQL and Sass.</li>
                <li>- Learned how to work with Git in a team with tight deadlines without constant guidance from instructors.</li>
                <li>- Tested stability for each website using Cypress and Jest by sending queries to the website, ensuring everything ran smoothly.</li>
              </ul>

              <h1 className='text-2xl'>Codexbloc & Co., Web Developer, 2020 - 2022​</h1><br />
                <ul className='mb-12 text-lg leading-relaxed font-millerLight'>
                <li>- Developed and maintained website front and back-end functionality using React, Node, Express, PostgreSQL, WordPress, and Headless CMS.</li>
                <li>- Converted outdated templates to Gatsby, React, and implemented UX-focused, fluid responsive websites.</li>
                <li>- Experienced in working with RESTFUL Web Services and implementing RESTFUL APIs.</li>
            </ul>

            <h1 className='text-2xl'>Story Grid Films, Creative Director, 2013​ - 2022​</h1><br />
              <ul className='mb-12 text-base leading-relaxed font-millerLight'>
                <li>- Provided beautiful products and exceptional customer service to clients and hit 40+ weddings per year.</li>
                <li>- Ranked the website to be on the First page on Google using SEO and increased profit by 80%.</li>
                <li>- Utilized the latest software, gears and gadgets to provide high-end quality and services.</li>
              </ul>
            
              <h1 className='text-2xl'>Techmation Electric, Industrial and Commercial Electrician, 2020​ - 2021</h1><br />
                <ul className='mb-12 text-lg leading-relaxed font-millerLight'>
                <li>- Collaborated with 4 electricians to install, repair and update circuits, lighting fixtures.</li>
                <li>- Planned installation routes to be more efficient at work while following the Canadian Electrical Codes.</li>
                <li>- Diagnosed system malfunctions, and consulted diagrams to solve 90% of problems without supervision.</li>
                <li>- Respect project deadlines and make every effort to meet them, even when challenges or roadblocks arise.</li>
              </ul>
              
              <br />

            </div>
              
        </WorkBoxWrapper>
        </ContainerWrapper>

        <div className="flex flex-col items-center justify-center p-8 bg-[#eeede8]">
        <SectionH2>RECENT WORK</SectionH2>
      </div>
      <Projects />
    </>
  )
}

export default index
