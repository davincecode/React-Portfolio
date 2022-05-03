/* DAVINCECODE LIB */

import styled from "styled-components"
import tw from "twin.macro"

/////////////////////////// CONTENT CONTAINERS ///////////////////////////
export const FullScreen = styled.div`
  ${tw`w-screen h-screen flex flex-col bg-[#eeede8]`}
`
export const SecondContainer = styled.div`
  ${tw`min-h-screen md:h-[88vh] flex flex-col bg-[#eeede8]`}
`
export const FullContainer = styled.div`
  ${tw`w-full flex flex-col py-4 px-8 md:p-0`}
`
export const SectionBGcool = styled.div`
  ${tw`bg-[#e0e4e3]`}
`
export const SectionBGStandard = styled.div`
  ${tw`bg-[#eeede8]`}
`
export const SectionBGwarm = styled.div`
  ${tw`bg-[#a19183]`}
`
export const SectionBGneutral = styled.div`
  ${tw`bg-[#efede8]`}
`
export const ParallaxBG = styled.div`
  ${tw`w-full h-screen object-cover bg-scroll `}
`
export const HeroElements = styled.div`
  ${tw`flex flex-col h-[88vh] items-center content-start  md:justify-center md:flex-row md:space-x-9`}
`
export const TwoColContainer = styled.div`
  ${tw`flex flex-col w-full md:justify-center md:flex-col lg:flex-row`}
`
///////////////////////////// SECTION CONTAINER //////////////////////////
export const SectionWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center h-full md:p-8 md:w-full md:flex-col lg:flex-row lg:w-2/3 `}
`

//////////////////////////// FLEX ROW CONTAINER //////////////////////////
export const LeftCol = styled.div`
  ${tw`flex justify-start w-full h-full`}
`
export const RightCol = styled.div`
  ${tw`flex flex-col justify-start w-full h-full`}
`
///////////////////////////////// DIVIDERS //////////////////////////////
export const DividerCol = styled.div`
  ${tw` py-8`}
`
export const DividerRow = styled.div`
  ${tw` px-4`}
`
export const HorizontalDivider = styled.div`
  ${tw`flex items-center justify-between w-full mx-auto my-4 border-t border-gray-300`}
`

////////////////////////// WRAPPERS NO-BG-COLOR //////////////////////////
export const WrapperOne = styled.div`
  ${tw`flex justify-center w-full h-[80vh]`}
`
export const WrapperOneStart = styled.div`
  ${tw`flex justify-start w-full h-[80vh]`}
`
export const CenterHalf = styled.div`
  ${tw`w-full md:w-5/6 lg:w-1/2 h-screen flex flex-col justify-center`}
`
export const WrapperTwo = styled.div`
  ${tw`flex justify-center items-center`}
`
export const WrapperTwoStart = styled.div`
  ${tw`flex p-24`}
`
export const ItemCenter = styled.div`
  ${tw`flex justify-center items-center`}
`

///////////////////////////// NAV COMPONENTS /////////////////////////////
export const NavContainer = styled.div`
  ${tw`flex w-full md:h-[12vh] items-center justify-between p-8`}
`
// export const NavContainer = styled.div`
//   ${tw`flex flex-col w-screen md:h-[12vh] p-10 mx-auto bg-white md:justify-between md:flex-row`}
// `
export const NavLinks = styled.div`
  ${tw`items-center justify-center hidden space-x-8 tracking-widest md:flex font-millerLight`}
`
export const MobileLinks = styled.div`
  ${tw`flex flex-col items-center justify-center tracking-widest md:hidden`}
`
export const LeftNav = styled.div`
  ${tw`text-2xl font-millerLight items-center flex justify-center`}
`
export const RigthNav = styled.div`
  ${tw`flex flex-col items-center justify-between min-h-[250px]`}
`
// export const RigthNav = styled.div`
//   ${tw`flex flex-row text-sm font-millerLight items-center justify-center`}
// `

///////////////////////////// FEATURE COMPONENTS /////////////////////////////
export const FeatureContainer = styled.div`
  ${tw`w-full flex justify-center items-center bg-[#a09083] h-64`}
`

///////////////////////////// 1 x 2 Box Wrappers /////////////////////////////
export const ContainerWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center w-full h-full md:p-12 mb-5`}
`
export const WorkBoxWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center h-full p-8 md:w-3/5 md:flex-row`}
`
export const WorkLeftBox = styled.div`
  ${tw`relative flex items-center justify-center object-fill w-full h-full`}
`
export const WorkRightBox = styled.div`
  ${tw`relative flex flex-col items-center justify-center object-fill w-full h-full gap-4 mt-4 md:mt-0 md:p-5`}
`
export const CenteredTitle = styled.div`
  ${tw`absolute text-sm top-1/2 bg-[#a09083] text-white font-millerLight p-4`}
`

///////////////////////////////// HEADERS & DESC //////////////////////////////
export const SectionTitle = styled.div`
  ${tw`flex items-center justify-center mt-16 text-3xl md:text-2xl font-millerLight`}
`
export const SectionTitleStart = styled.div`
  ${tw`flex justify-start my-4 text-2xl font-millerItalicLight `}
`
export const SectionH1 = styled.div`
  ${tw`flex p-8 text-3xl leading-relaxed tracking-wide font-millerLight`}
`
export const SectionH2 = styled.div`
  ${tw`flex md:p-8 text-2xl text-center md:text-3xl md:tracking-wide md:leading-loose font-millerLight`}
`
export const H2Left = styled.div`
  ${tw`flex text-2xl items-start my-4 lg:my-0 md:text-3xl md:tracking-wide md:leading-loose font-millerLight`}
`
export const SectionP = styled.div`
  ${tw`flex p-4 md:p-8 text-lg text-center md:text-lg md:tracking-wide md:leading-loose font-millerLight`}
`
export const SectionPL = styled.div`
  ${tw`flex flex-col text-justify text-base md:text-lg md:tracking-wide leading-relaxed font-millerLight`}
`

//////////////////////////////////// BUTTONS //////////////////////////////////
export const Button = styled.div`
  ${tw`flex justify-center w-56 p-4 mt-10 text-sm text-white bg-black font-millerLight cursor-pointer`}
`
export const AuthButton = styled.div`
  ${tw`flex justify-center w-56 p-4 mt-10 text-sm text-white bg-black font-millerLight cursor-pointer`}
`

//////////////////////////////////// TEXTAREA //////////////////////////////////
export const TextAWBG = styled.div`
  ${tw`flex justify-center w-56 p-4 mt-10 text-sm text-black bg-white font-millerLight`}
`
export const SmoothRoll = styled.div`
  ${tw``}
`
export const TextANoBG = styled.div`
  ${tw`relative flex items-center justify-center object-fill w-full h-full`}
`
export const SectionTextWhite = styled.div`
  ${tw`absolute text-3xl text-white text-center tracking-wider leading-loose font-millerLight`}
`
export const TextWhiteStart = styled.div`
  ${tw`flex justify-end flex-col md:absolute text-lg text-white tracking-wider leading-loose font-millerLight`}
`

//////////////////////////////////// MOBILE  ////////////////////////////////////
export const FullContainerMobile = styled.div`
  ${tw`flex flex-col`}
`
export const WrapperTwoMobile = styled.div`
  ${tw`p-4 flex items-end`}
`
export const WrapperOneMobile = styled.div`
  ${tw`flex flex-1 h-[80vh]`}
`

//////////////////////////////////// CLEANUP  ////////////////////////////////////
export const SectionContainer = styled.div`
  ${tw`flex items-center justify-center w-full`}
`

export const SectionPadding = styled.div`
  ${tw` py-20 md:p-24 w-3/4`}
`
//this requires CenteredTitle
export const DivColumn = styled.div`
  ${tw`relative flex items-center justify-center`}
`
export const AboutP = styled.div`
  ${tw`flex-wrap items-center justify-center p-4 text-xl tracking-wide md:p-0 md:w-2/5 md:text-lg font-millerLight md:leading-loose`}
`
