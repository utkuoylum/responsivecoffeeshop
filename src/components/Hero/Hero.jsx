import React from 'react'


const bgImage = {
  backgroundImage: 'url(/bg-slate.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}


const Hero = () => {
  return (
    <main style={bgImage}>
      <section className='min-h-[750px] w-full'>
        <div className="container">
          {/* navbar section */}
          {/* hero section */}
          <div className='grid grid-cols-1 md:grid-cols-2'></div>
        </div>
      </section>
    </main>
  )
}

export default Hero
