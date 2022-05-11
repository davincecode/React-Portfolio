/* eslint-disable jsx-a11y/alt-text */
import { FullContainer, HeroElements, Button } from "../../styles/GlobalStyles"

export default function Index() {
  return (
    <>
      <FullContainer className="bg-[#eeede8]">
        <HeroElements>
          <div className="w-[400px]">
          <img className="flex-1 " src="/images/motor.jpg" data-aos="fade" />
          </div>
          <div className="flex-wrap items-center justify-center w-full p-8 text-2xl tracking-wide md:w-2/5 md:text-2xl md:p-0 lg:text-3xl md:leading-loose z-10" data-aos="fade-left">
          <h1 className='font-millerItalicLight mb-8'>Hello! My name is Vince!</h1>
            <div>
              <p className="text-lg font-millerLight mb-8">A
              creative and detail-oriented, Full-stack software developer
              devoted to crafting beautiful web experiences focused on
              simplicity and function. A Strong communicator with the ability to
              work effectively on a diverse team. I am looking to bring these
              skills to a product-focused tech company with a global reach.</p>
              <p className="text-lg font-millerLight">If you're interested in working together, please reach out! I'd
                love to chat about your next project.</p>
            </div>
            <a href="#experience">
              <Button>LEARN MORE</Button>
            </a>
          </div>
          {/* <div>
          <img
            className="w-[400px] absolute right-32 top-2/4 z-0 hidden md:hidden lg:block"
            src="/images/art.jpg"
            />
            </div> */}
        </HeroElements>
      </FullContainer>
    </>
  )
}
