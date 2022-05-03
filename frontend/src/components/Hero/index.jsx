/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import { FullContainer, HeroElements, Button } from "../../styles/GlobalStyles"

export default function Index() {
  return (
    <>
      <FullContainer className="bg-[#eeede8]">
        <HeroElements>
          <div className="w-[400px]">
          <img className="flex-1 " src="/images/laptop.jpg" data-aos="fade" />
          </div>
          <div className="flex-wrap items-center justify-center w-full p-8 text-2xl tracking-wide md:w-2/5 md:text-2xl md:p-0 lg:text-3xl font-millerLight md:leading-loose" data-aos="fade-left">
            Full-stack web designs focused on{" "}
            <div>
              <span className=" font-millerItalic">Simplicity</span> and
              <span className=" font-millerItalic"> Function.</span>
            </div>
            <Link to="/about">
              <Button>LEARN MORE</Button>
            </Link>
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
