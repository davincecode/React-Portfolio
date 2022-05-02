import React from 'react'
import axios from 'axios';

export default function Contact() {
  async function handleOnSubmit(event) {
    event.preventDefault();
    const formData = {};
    Array.from(event.currentTarget.elements).forEach(field => {
      if (!field.name) return
        formData[field.name] = field.value;
    });
    axios.post('/api/email', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      
    console.log(formData);
    }
  

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <form method="post" onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" />
        <button>Send</button>
      </form>
    </div >
  )
}
