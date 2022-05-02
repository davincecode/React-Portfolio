/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import {
  WorkLeftBox,
  WorkRightBox,
  ContainerWrapper,
  WorkBoxWrapper,
  CenteredTitle,
  DivColumn,
  SectionTitle,
} from "../../styles/GlobalStyles"

const index = () => {
  return (
    <>
      <ContainerWrapper>
        <SectionTitle>EXPERIENCE</SectionTitle>
        <WorkBoxWrapper>
          <WorkLeftBox data-aos="zoom-in">
            <CenteredTitle>WEBDESIGN AND DEVELOPMENT</CenteredTitle>
            <img src="/images/fine-image.jpg" />
          </WorkLeftBox>
          <WorkRightBox>
            <DivColumn data-aos="zoom-in">
              <CenteredTitle>CREATIVE DIRECTION</CenteredTitle>
              <img src="/images/chair.jpg" />
            </DivColumn>
            <DivColumn data-aos="zoom-in">
              <CenteredTitle>PHOTOGRAPHY</CenteredTitle>
              <img src="/images/window.jpg" />
            </DivColumn>
          </WorkRightBox>
        </WorkBoxWrapper>
      </ContainerWrapper>
    </>
  )
}

export default index
