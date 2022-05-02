import React from "react"
import { Link } from 'react-router-dom';
import {
  WrapperTwo,
  SectionTextWhite,
  Button,
  WrapperOne,
  ItemCenter,
} from "../../styles/GlobalStyles"

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
                <Link to="/about">
                  <Button>LEARN MORE</Button>
                </Link>
              </ItemCenter>
            </SectionTextWhite>
          </WrapperTwo>
        </WrapperOne>
      </div>
    </>
  )
}
