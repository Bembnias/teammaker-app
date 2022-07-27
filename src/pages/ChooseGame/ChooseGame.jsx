import React from 'react'
import { Link } from 'react-router-dom'

const ChooseGame = () => {
  return (
    <header className="dark-linear-gradient min-h-screen lg:h-[calc(100vh-4rem)] w-full py-14">
      <div className="container mx-auto px-10 w-full lg:h-full">
        <h2 className="text-4xl text-pinkish font-semibold">Choose a game</h2>
        <section className="w-full lg:h-full flex flex-col lg:flex-row gap-y-4 lg:gap-x-6 pt-14">
          <Link to={'/league-of-legends'} className='relative game-card-one w-full lg:w-1/4 h-80 lg:h-4/5 rounded-xl'>
            <h5 className='absolute text-center w-full top-1/2 -translate-y-1/2 text-white text-4xl z-20'>LOL</h5>
            <div className="absolute rounded-xl opacity-60 hover:opacity-0 ease-in-out duration-300 cursor-pointer bg-primary-dark w-full h-full"></div>
          </Link>
          <Link to={'/cs-go'} className='relative game-card-two w-full lg:w-1/4 h-80 lg:h-4/5 rounded-xl'>
            <h5 className='absolute text-center w-full top-1/2 -translate-y-1/2 text-white text-4xl z-20'>CS:GO</h5>
            <div className="absolute rounded-xl opacity-60 hover:opacity-0 ease-in-out duration-300 cursor-pointer bg-primary-dark w-full h-full"></div>
          </Link>
          <Link to={'/brawl-stars'} className='relative game-card-three w-full lg:w-1/4 h-80 lg:h-4/5 rounded-xl'>
            <h5 className='absolute text-center w-full top-1/2 -translate-y-1/2 text-white text-4xl z-20'>Brawl Stars</h5>
            <div className="absolute rounded-xl opacity-60 hover:opacity-0 ease-in-out duration-300 cursor-pointer bg-primary-dark w-full h-full z-10"></div>
          </Link>
          <div className='relative dark-radial-gradient-2nd w-full lg:w-1/4 h-80 lg:h-4/5 rounded-xl'>
            <div className='absolute top-1/2 -translate-y-1/2 w-full text-secondary-dark text-center font-semibold bg-primary-dark py-5'>
              <i className='bx bx-question-mark text-8xl'></i>
              <h5>More coming soon...</h5>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
}

export default ChooseGame