import React from "react"

export default function Projects({image}) {
  return (
    <>
      <div data-aos="fade-up" data-aos-delay="2000">
          <img src={ image } alt="gallery" width="200px" />
      </div>
    </>
  )
}