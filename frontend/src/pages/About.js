import { Link } from "react-router-dom"
import {
  SecondContainer,
  HeroElements,
  Button,
  AboutP,
  SectionPL,
  SectionTitleStart,
  SectionBGStandard,
  WrapperOneMobile,
  TextWhiteStart,
  WrapperTwoMobile,
  FullContainerMobile,
} from "../styles/GlobalStyles"

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
      <SectionBGStandard>
        <SecondContainer>
          <HeroElements>
            <img
              className="w-[500px] md:w-[350px] "
              src="/images/motor.jpg"
              alt=""
            />

            <AboutP>
              <SectionTitleStart>Thanks for being here!</SectionTitleStart>
              <SectionPL>
                <span className="mb-4">My name is Vince!</span>A
                detail-oriented, Full-Stack Web Developer devoted to crafting
                beautiful web experiences focused on simplicity and function.
                Strong communicator with the ability to work effectively on a
                diverse team. I am looking to bring these skills to a
                product-focused tech company with a global reach.
                <span className="mt-4">
                  If you're interested in working together, please reach out!
                  I'd love to chat about your next project.
                </span>
              </SectionPL>
              <Link to="/recent">
                <Button>RECENT WORK</Button>
              </Link>
            </AboutP>
          </HeroElements>
        </SecondContainer>
      </SectionBGStandard>
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
