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
          <div className="z-10 flex-wrap items-center justify-center w-full p-8 text-2xl tracking-wide md:w-2/5 md:text-2xl md:p-0 lg:text-3xl md:leading-loose" data-aos="fade-left">
          <h1 className='mb-8 font-millerItalicLight'>Hello! My name is Vince!</h1>
            <div>
              <p className="mb-8 text-lg font-millerLight">A
              creative and detail-oriented, Full-stack software developer
              devoted to crafting beautiful web experiences focused on
              simplicity and function. A Strong communicator with the ability to
              work effectively on a diverse team. I am looking to bring these
              skills to a product-focused tech company with a global reach.</p>
              <p className="text-lg font-millerLight">If you're interested in working together, please reach out! I'd
                love to chat about your next project.</p>
            </div>
            <span className='flex flex-row gap-2'>
            <a href="#experience">
              <Button data-aos="fade-up">LEARN MORE</Button>
            </a>
            <a href="images/Resume_Vincent_Ybanez_dev.pdf" target="_blank" >
              <Button data-aos="fade-up">DOWNLOAD CV</Button>
              </a>
            </span>
          </div>
        
        </HeroElements>
      </FullContainer>
    </>
  )
}
