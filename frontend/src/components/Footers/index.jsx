/* eslint-disable jsx-a11y/anchor-is-valid */
import Contact from 'components/Forms/Contact';
import React from "react"


export default function index() {
  return (
    <>
      <footer className="pt-4 pb-8 bg-[#eeede8] xl:pt-24 xl:pb-24">
      <Contact />
          <div className="flex items-center justify-between max-w-xs mx-auto ">
            <a href="https://www.facebook.com/vincentybanezphotography" target="_blank" rel="noreferrer" >
            <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/vncntybnz" target="_blank" rel="noreferrer" >
            <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://github.com/davincecode" target="_blank" rel="noreferrer" >
            <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/vincent-ybanez-b90056b5" target="_blank" rel="noreferrer" >
            <i className="fa-brands fa-linkedin-in"></i>
            </a>
            
          </div>
          <div className="flex items-center justify-center pt-10 font-light text-center sm:pt-">
            <small>©2022 COPYRIGHT DAVINCECODE. ALL RIGHTS RESERVED.</small>
          </div>
      </footer>
    </>
  )
}
