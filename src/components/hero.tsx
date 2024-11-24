import React from 'react'

const hero = () => {
  return (
    <section  className='flex items-center sm:text-3xl md:text-4xl' style={{
      backgroundImage: "url('/bg image.jpg')", // Public folder ka path
      backgroundSize: 'cover', // Image ko cover karne ke liye
      backgroundPosition: 'center ', // Center mein position karne ke liye
      height: '100vh', // Full viewport height
      background:'transparent-400'
    }}>
       <div className='flex text-xl mt-12 text-bold ml-6 sm:text-3xl md:text-4xl'>
    <ul>
                   <li><h1 className='text-white font-bold text-4xl'>Welcome to the</h1></li>
                   <li><h1 className='text-white text-bold text-5xl' > NIKE WORLD</h1></li><br></br>
                   <li><h1 className='text-white font-bold text-3xl' >Your Own Shop<br></br>of World No1<br></br>Branded Shoes</h1></li><br></br>
                   <button className='mt-3 px-6 py-3 bg-blue-500 hover:bg-blue-300 rounded-md font-bold'>Shop Now</button>
                           
                      </ul>
           </div>
 
      
    </section>
  )
}

export default hero

