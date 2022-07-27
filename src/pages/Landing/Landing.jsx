import React from 'react'
import { Link } from 'react-router-dom'
import InfoCards from './InfoCards'

const Landing = () => {
  return (
    <header className="landing-bg-image relative h-full lg:h-[calc(100vh-4rem)] w-full">
      <div className="dark-radial-gradient h-full w-full z-10 py-14">
        <div className='text-center'>
          <h2 className='text-pinkish text-4xl lg:text-6xl uppercase font-semibold tracking-wide'>assemble your dream team <br /> and go for the glory!</h2>
          <p className='text-secondary-dark text-xl lg:text-3xl mt-2'>New generation of <span className='text-primary'>team making</span> is here</p>
          <InfoCards />
          <div className="flex mx-auto mt-14 gap-x-6 justify-center">
            <Link to={'/choose-a-game'} className="button-primary">search for a team</Link>
            <Link to={'/register'} className="button-secondary">create account now</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Landing