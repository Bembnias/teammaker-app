import React from 'react'

const InfoBoxes = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-y-10 lg:gap-x-5 px-10 container mx-auto mt-14 justify-between'>
      <div className='text-center'>
        <i className='bx bx-target-lock text-primary text-9xl'></i>
        <h5 className='text-white text-2xl uppercase my-5'>targeting</h5>
        <p className="text-xl text-secondary-dark">
          You specifie which type <br />
          of player you will be playing with <br />
          based on their ranks, opinions, etc.
        </p>
      </div>
      <div className='text-center'>
        <i className='bx bx-check-shield text-primary text-9xl'></i>
        <h5 className='text-white text-2xl uppercase my-5'>reputation system</h5>
        <p className="text-xl text-secondary-dark">
          Reward or punish teammates <br />
          when game is finished. <br />
          You will be able to avoid them in the future.
        </p>
      </div>
      <div className='text-center'>
        <i className='bx bx-conversation text-primary text-9xl'></i>
        <h5 className='text-white text-2xl uppercase my-5'>converse</h5>
        <p className="text-xl text-secondary-dark">
          Discuss with other players <br />
          on our forum <br />
          about tournaments, esport...
        </p>
      </div>
    </div>
  )
}

export default InfoBoxes