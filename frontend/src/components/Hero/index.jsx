/* eslint-disable jsx-a11y/alt-text */
import { FullContainer, HeroElements, Button } from "Styles/GlobalStyles"

export default function Index() {
  return (
    <>
      <FullContainer>
        <HeroElements>

          <img className="w-[500px] " src="/images/laptop.jpg" data-aos="fade" />
          
          <div className="flex-wrap items-center justify-center w-full p-8 text-3xl tracking-wide md:w-2/5 md:text-4xl font-millerLight md:leading-loose" data-aos="fade-left">
            Full-stack web designs focused on{" "}
            <div>
              <span className=" font-millerItalic">Simplicity</span> and
              <span className=" font-millerItalic"> Function.</span>
            </div>
            <a href="/about">
              <Button>LEARN MORE</Button>
            </a>
          </div>
          {/* <img
            className="w-[450px] absolute right-8 top-2/4"
            src="/images/off-image.jpg"
          /> */}
        </HeroElements>
      </FullContainer>
    </>
  )
}
