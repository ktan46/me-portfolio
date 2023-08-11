import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100% , 38rem)]">
      <SectionHeading>Contact Me</SectionHeading>
      <p>Please contact me directly at k 46 tan at uwaterloo dot ca</p>
      <form className="mt-10 flex flex-col dark:text-black">
        <input type="email" className="h-14 rounded-lg borderBlack" />
        <textarea className="h-52 my-3 rounded"/>
        <button type="submit">Submit <FaPaperPlane/> {" "}</button>
      </form>
      
    </section>
  )
}
