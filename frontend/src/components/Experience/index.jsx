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
          <div className='p-8 mt-8 font-miller'>
            
          <h1 className='text-2xl'>Lighthouse Labs, Student, 2022​</h1><br />
              <ul className='mb-12 text-lg leading-relaxed font-millerLight'>
                <li>- Collaborated with a team of software engineers to create full stack web applications.</li>
                <li>- Utilized modern frameworks and libraries such as React, Ruby, Express, Nodejs, PostgreSQL and Sass.</li>
                <li>- Learned how to work with Git in a team with tight deadlines without constant guidance from instructors.</li>
                <li>- Design responsive web applications and implement dynamic elements to improve user experience.</li>
                <li>- Tested stability for each website by sending thousands of queries to the website, ensuring everything ran smoothly.</li>
              </ul>

              <h1 className='text-2xl'>Codexbloc & Co., Web Developer, 2020 - 2022​</h1><br />
                <ul className='mb-12 text-lg leading-relaxed font-millerLight'>
                <li>- Developed and maintained website front and back-end functionality upon client's request.</li>
                <li>- Converted outdated templates and implemented UX-focused, fluid responsive websites.</li>
                <li>- Involved in developing Model View Controller (MVC) Architecture based Single Page Applications (SPA) using Reactjs, Bootstrap, CSS3, SASS and HTML5.</li>
                <li>- Experience in working with RESTFUL Web Services and implementing RESTFUL API's.</li>
            </ul>

            <h1 className='text-2xl'>Story Grid Films, Creative Director, 2013​ - 2022​</h1><br />
              <ul className='mb-12 text-lg leading-relaxed font-millerLight'>
                <li>- Provided beautiful products and exceptional customer service to clients.</li>
                <li>- Ranked the website to be on the First page on Google using SEO.</li>
                <li>- Managed the company and was able to hit 40+ weddings per year.</li>
                <li>- Utilized the latest software, gears and gadgets to provide high-end services.</li>
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
