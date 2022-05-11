import React from 'react'
import { CenterForm, WrapperForm } from "../../styles/GlobalStyles"

const Contact = () => {
  return (
    <div>
      <WrapperForm>
      <CenterForm>
      <iframe
        src="https://app.studioninja.co/contactform/parser/0a800fc9-7033-1037-8170-4eea29d33fe4/0a800fc8-7686-1ed0-8176-c12f54171903"
        title="contacts"
        // className="w-full border-2 h-5/6 border-slate-600"
        className="flex-grow"
      ></iframe>
      </CenterForm>
      </WrapperForm>
    </div>
  )
}

export default Contact