import React from 'react'

const About = () => {
  return (
    <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10 'style={{
      backgroundImage: "url('/bg image 2.jpg')", // Public folder ka path
      backgroundSize: 'cover', // Image ko cover karne ke liye
      backgroundPosition: 'center ', // Center mein position karne ke liye
      height: '100vh', // Full viewport height
      background:'transparent-400'
    }}>
   <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
    <h2 className='text-4xl mb-4 font-bold'>About us</h2>
    <p>Nike shoes are renowned for their innovation, comfort, and stylish designs. With cutting-edge technology like Air cushioning and Flyknit uppers, We are crafted to provide exceptional support and durability for athletes and casual wearers alike. Whether it's for running, basketball, or everyday use, Nike shoes combine performance with sleek, modern aesthetics, making them a popular choice worldwide. The brand's commitment to quality and design has solidified Nike's position as a leader in the global footwear market.</p>
   </div>
    </section>
    )
}

export default About
