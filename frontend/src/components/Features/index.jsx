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
            A website is a unique way to connect with the world.
              <ItemCenter data-aos="fade-up">
                <Link to="/recent">
                  <Button>MORE PROJECTS</Button>
                </Link>
              </ItemCenter>
            </SectionTextWhite>
          </WrapperTwo>
        </WrapperOne>
      </div>
    </>
  )
}
