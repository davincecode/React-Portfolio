import { Link } from "react-router-dom"
import {
  SecondContainer,
  SectionTitleStart,
  HeroElementsMD,
  Button,
  AboutP,
  SectionPL,
  WrapperOneMobile,
  TextWhiteStart,
  WrapperTwoMobile,
  FullContainerMobile,
} from "styles/GlobalStyles"

export default function About() {
  const styles = {
    backgroundImage: "url('/images/house.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }
  return (
    <>
      <SecondContainer>
        <HeroElementsMD>
          <img
            className="w-full md:w-[500px] md:mt-8 lg:w-[400px]"
            src="/images/motor.jpg"
            alt=""
          />

          <AboutP>
            <SectionPL>
              <SectionTitleStart>Hello! My name is Vince!</SectionTitleStart>A
              creative and detail-oriented, Full-Stack software developer
              devoted to crafting beautiful web experiences focused on
              simplicity and function. A Strong communicator with the ability to
              work effectively on a diverse team. I am looking to bring these
              skills to a product-focused tech company with a global reach.
              <span className="mt-4">
                If you're interested in working together, please reach out! I'd
                love to chat about your next project.
              </span>
            </SectionPL>
            <Link to="/recent">
              <Button>RECENT WORK</Button>
            </Link>
          </AboutP>
        </HeroElementsMD>
      </SecondContainer>

      <FullContainerMobile>
        <div style={styles}>
          <WrapperOneMobile>
            <WrapperTwoMobile>
              <TextWhiteStart className="p-12 bg-opacity-75 md:flex-1 bg-stone-900">
                Tech Stack used for this website:
                <br />
                <i>
                  NodeJS, Express, React, MongoDB, Mongoose, Axios, JWT,
                  TailwindCSS, Twin.Macro, Styled-Components, SendGrid.
                </i>
              </TextWhiteStart>
            </WrapperTwoMobile>
          </WrapperOneMobile>
        </div>
      </FullContainerMobile>
    </>
  )
}
