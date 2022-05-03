import { Link } from "react-router-dom"
import {
  FullContainer,
  HeroElements,
  Button,
  SectionBGStandard,
  WrapperOneStart,
  TextWhiteStart,
  WrapperTwoStart,
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
        <FullContainer>
          <HeroElements>
            <img
              className="w-[500px] md:w-[350px] "
              src="/images/motor.jpg"
              alt=""
            />

            <div className="flex-wrap items-center justify-center w-full p-8 text-xl tracking-wide md:p-0 md:w-2/5 md:text-lg font-millerLight md:leading-loose">
              <h1 className="mt-8 text-3xl font-millerItalic ">
                Thanks for being here!
              </h1>
              <br />
              My name is Vince! I'm a full-stack web developer with a passion
              for building and designing beautiful, responsive websites.
              <div className="mt-4">
                If you're interested in working together, please reach out!
                <br /> I'd love to chat about your next project.
                <Link to="/recent">
                  <Button>RECENT WORK</Button>
                </Link>
              </div>
            </div>
          </HeroElements>
        </FullContainer>
      </SectionBGStandard>
      <div style={styles}>
        <WrapperOneStart>
          <WrapperTwoStart>
            <TextWhiteStart className="p-4 bg-opacity-75 md:p-12 mt-96 bg-stone-900">
              Tech Stack used for this website:
              <br />
              <i>
                NodeJS, Express, React, MongoDB, Mongoose, Axios, JWT,
                TailwindCSS, Twin.Macro, Styled-Components, SendGrid.
              </i>
            </TextWhiteStart>
          </WrapperTwoStart>
        </WrapperOneStart>
      </div>
    </>
  )
}
