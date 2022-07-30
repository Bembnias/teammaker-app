import React from 'react'

const GameConnectBtn = ({ game }) => {
  switch(game) {
    case "cs-go":
      return (
        <div className="button-golden">
          connect acc <i className='bx bxl-steam'></i>
        </div>
      )
    case "league-of-legends":
      return (
        <div className="button-golden">
          add summoner <i class='bx bxs-check-shield'></i>
        </div>
      )
    case "brawl-stars":
      return (
        <div className="button-golden">
          add player tag <i className='bx bxs-star'></i>
        </div>
      )
    default:
      return (
        <></>
      )
  }
}

export default GameConnectBtn