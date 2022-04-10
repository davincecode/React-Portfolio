import React from "react"
import { ContainerWrapper, SectionTitle } from "Styles/GlobalStyles"

export default function index() {
  return (
    <>
      <ContainerWrapper>
        <SectionTitle>RECENT WORK</SectionTitle>
        <section className="overflow-hidden text-gray-700 ">
          <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2" data-aos="fade-up">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/bath.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2" data-aos="fade-up">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/flower.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2" data-aos="fade-up" data-aos-delay="500">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/bed.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2" data-aos="fade-up" data-aos-delay="1000">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/book.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2" data-aos="fade-up" data-aos-delay="1500">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/light.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2" data-aos="fade-up" data-aos-delay="2000">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="/images/vase.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContainerWrapper>
    </>
  )
}
