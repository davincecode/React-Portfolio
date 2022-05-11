import React from 'react' 
import projectsList from 'Data/projectsList';
import {FullContainer, TwoColContainer, SectionWrapper, LeftCol, RightCol, DividerRow, DividerCol, H2Left} from 'styles/GlobalStyles';

export const Projects = () => {
  return (
    
    projectsList.map((props, index) => {
      const {title, image, description, stack, link1, link2} = props;  

        return (
          <>
            <div key={index}>
            <FullContainer className='bg-[#a19183] text-white'>
                <TwoColContainer>
                  <SectionWrapper>
                    <LeftCol>
                      <img src={ image } alt={ title }/>
                    </LeftCol>
                    <DividerRow />
                    <RightCol>
                      <H2Left>{ title }</H2Left>
                        <p>{ description }</p>
                          <p className='mt-2'>Tech Stack: <i>{ stack }</i></p>
                            <hr className="flex items-center justify-between w-full mx-auto my-4 border-t border-neutral-300 " />
                        <div className="flex justify-start gap-x-8">
                          <a href={ link1 } target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-globe"></i>
                              </a>
                              <a href={ link2 } target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                          </a>
                        </div>
                    </RightCol>
                  </SectionWrapper>
                </TwoColContainer>
              <DividerCol />
            </FullContainer>
            </div>
          </>
        )
      })
      
   
  );
}