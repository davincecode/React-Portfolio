import React from "react"
import {
  WrapperTwo,
  SectionTextWhite,
  Button,
  WrapperOne,
  ItemCenter,
} from "Styles/GlobalStyles"

export default function index() {
  const styles = {
    backgroundImage: "url('/images/art.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }

  return (
    <>
      <div style={styles}>
        <WrapperOne>
          <WrapperTwo>
            <SectionTextWhite data-aos="fade">
              CREATING simplicity and positivity through thoughtfully DESIGNED
              SPACES
              <ItemCenter data-aos="fade-up">
                <a href="/about">
                  <Button>LEARN MORE</Button>
                </a>
              </ItemCenter>
            </SectionTextWhite>
          </WrapperTwo>
        </WrapperOne>
      </div>
    </>
  )
}
