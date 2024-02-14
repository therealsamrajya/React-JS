import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
      <h2>Testimonial</h2>
      <section>

        <TestimonialCard name={"Samrajya"} feedback={"Great design and code construction"}/>

        <TestimonialCard name={"Elon Muak"} feedback={"Lets GO my G"}/>

        <TestimonialCard name={"Jeff Bezos"} feedback={"Should we hire you??"}/>

      </section>
    </div>
  )
}

const TestimonialCard=({name,feedback})=>(
  <article>
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
)

export default Testimonial