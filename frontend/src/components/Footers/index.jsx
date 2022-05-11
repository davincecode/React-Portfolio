/* eslint-disable jsx-a11y/anchor-is-valid */
import Contact from 'components/Forms/Contact';
import React from "react"


export default function index() {
  return (
    <>
      <footer className="pt-4 pb-8 bg-[#eeede8] xl:pt-24 xl:pb-24">
      <Contact />
        <div className="max-w-screen-lg px-4 mx-auto text-white xl:max-w-screen-xl sm:px-6 md:px-8 text-black">
          {/* <ul className="flex flex-col flex-wrap justify-center pb-8 text-lg md:flex-row">
            <li className="w-full my-12 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <h2 className="mb-4 text-2xl text-white uppercase md:text-md font-millerLight">
                  SUBSCRIBE
                </h2>
                <p className=" font-GroteskLight">
                  Join our mailing list to be the first to hear about our promotions!
                </p>
                
                
                <form className="text-base font-millerLight">
                <input
                  type="text"
                  className="p-4 mt-4 font-GroteskLight"
                  placeholder="Email Address"
                
                />
                <div className="flex items-center justify-center ">
                <button type="submit"  className="flex justify-center w-56 p-4 mt-10 text-sm text-white bg-black cursor-pointer font-millerLight" >
                      Submit
                    </button>
                </div>
                </form>
                


              </div>
            </li>
            <li className="w-full my-12 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <h2 className="mb-4 text-2xl uppercase md:text-md font-millerLight">
                  FIND ME
                </h2>
                <ul>
                  <li className="mb-4 tracking-normal font-GroteskLight">
                    <a href="https://github.com/davincecode" target="_blank" rel="noreferrer" >Github</a>
                  </li>
                  <li className="mb-4 tracking-normal font-GroteskLight">
                    <a href="https://www.linkedin.com/in/vincent-ybanez-b90056b5" target="_blank" rel="noreferrer" >LinkedIn</a>
                  </li>
                  <li className="mb-4 tracking-normal font-GroteskLight">
                    <a href="https://www.instagram.com/vincentybanezphoto/" target="_blank" rel="noreferrer" >Instagram</a>
                  </li>
                  <li className="mb-4 tracking-normal font-GroteskLight">
                    <a href="https://www.facebook.com/vincentybanezphotography" target="_blank" rel="noreferrer" >Facebook</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-full my-12 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <h2 className="mb-4 text-2xl uppercase md:text-md font-millerLight">
                  OTHER WORK
                </h2>
                <ul>
                  <li className="mb-4 tracking-normal font-GroteskLight">
                    <a href="http://vincentybanez.com" target="_blank" rel="noreferrer" >Professional wedding Photography</a>
                  </li>
                  <li className="mb-4 tracking-normal font-GroteskLight">
                    <a href="http://storygridfilms.com" target="_blank" rel="noreferrer" >Professional Wedding Cinematography</a>
                  </li>
                  <li className="mb-4 tracking-normal font-GroteskLight">
                    <a href="https://sheephostingbay.com/" target="_blank" rel="noreferrer" >Get your Domain and Hosting</a>
                  </li>
                  <br />
                  <li className="mb-4 tracking-normal font-GroteskLight">
                    <a href="#">Back to top</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul> */}
          
          {/* <hr className="flex items-center justify-between w-full pt-8 mx-auto border-t border-white" /> */}
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
        </div>
      </footer>
    </>
  )
}
