/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import {
  ContainerWrapper,
  WorkBoxWrapper,
  SectionTitle,
} from "../../styles/GlobalStyles"

const index = () => {
  return (
    <>
      <div>
      <ContainerWrapper>
        <SectionTitle>EXPERIENCE</SectionTitle>
        <WorkBoxWrapper>
              <div className='font-miller p-8'>
                <h1 className='text-xl'>Codexbloc & Co., Web Developer, 2018 - 2022​</h1>
                <p>
                - Developed and maintained website front and back-end functionality upon client's request.<br />
                - Converted outdated templates and implemented UX-focused, fluid responsive websites.<br />
                - Took over the existing site to complete work started by another developer.<br />
                </p><br />

              <h1>Story Grid Films , Creative Director , 2013​ - 2022</h1>​
              <p>
                - Provided beautiful products and exceptional customer service to clients.<br />
                - Ranked the website to be on the First page on Google using SEO.<br />
                - Managed the company and was able to hit 40+ weddings per year.<br />
                - Utilizing the latest software, gears and gadgets to provide high-end services.<br />
              </p><br />
                
              <h1>Techmation Electric , Industrial and Commercial Electrician , 2020​ - 2021​</h1>
              <p>
                - Work with multiple construction teams to develop original blueprints of electrical wiring for new construction sites.<br />
                - Planning installation routes to be more efficient at work while following the Canadian Electrical Codes.<br />
              </p>
              </div>
              
        </WorkBoxWrapper>
        </ContainerWrapper>
      </div>
    </>
  )
}

export default index
