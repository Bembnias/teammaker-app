import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import LolLogo from '../img/lol-logo.png'
import CSGOLogo from '../img/csgo-logo.png'
import BSLogo from '../img/bs-logo.png'
import { pickBrawlstars, pickCsgo, pickLol } from '../redux/games/gamesReducer'

import GameConnectBtn from './GameConnectBtn'

const Sidebar = () => {
  const location = useLocation()
  const { pathname } = location

  const game = useSelector(state => state.gamesReducer.game)
  const user = useSelector(state => state.authReducer.userInfo)
  const dispatch = useDispatch()

  return (
    <aside className='hidden lg:flex flex-col sticky top-16 lg:min-w-80 px-6 h-[calc(100vh-4rem)]' style={{backgroundColor: "#171717"}}>
      
      {/* @ CHANGE GAME LINKS @ */}
      <div className='flex gap-x-6 mx-auto mt-8'>
        <Link to={'/league-of-legends'} onClick={() => dispatch(pickLol())} className={`sidebar-game-tile ${pathname.includes("league-of-legends") && 'active-tile'}`} style={{backgroundColor: "#1663BE"}}>
          <img className=' w-full' src={LolLogo} alt="lol logo png" />
        </Link>
        <Link to={'/cs-go'} onClick={() => dispatch(pickCsgo())} className={`sidebar-game-tile ${pathname.includes("cs-go") && 'active-tile'}`} style={{backgroundColor: "#DE9B35"}}>
          <img className=' w-full' src={CSGOLogo} alt="lol logo png" />
        </Link>
        <Link to={'/brawl-stars'} onClick={() => dispatch(pickBrawlstars())} className={`sidebar-game-tile ${pathname.includes("brawl-stars") && 'active-tile'}`} style={{backgroundColor: "#333333"}}>
          <img className='w-full' src={BSLogo} alt="lol logo png" />
        </Link>
      </div>

      {/* @ BUTTON GROUP @ */}
      <div className='flex flex-col mt-8 gap-y-5'>
        <GameConnectBtn game={game} />
        <div className="button-primary">create lobby</div>
        <div className="button-secondary">
          mix team: <span className='text-primary'>317</span> <i className='bx bxs-user'></i>
        </div>
      </div>

      {/* @ SIDENAV BUTTON GROUP */}
      <div className='flex flex-col mt-14 gap-y-1 text-white'>
        <Link to={`/${game}`} className='p-1 uppercase text-left font-semibold rounded-md py-2 justify-center hover:bg-black hover:text-pinkish ease-in-out duration-300'>  
          <i className='bx bxs-home ml-2 mr-1' ></i> search for a team
        </Link>
        <Link to={`/${game}/respect-ranking`} className='p-1 uppercase text-left font-semibold rounded-md py-2 justify-center hover:bg-black hover:text-pinkish ease-in-out duration-300'>  
          <i className='bx bxs-bar-chart-alt-2 ml-2 mr-1'></i> respect ranking
        </Link>
        <Link to={'/teams'} className='p-1 uppercase text-left font-semibold rounded-md py-2 justify-center hover:bg-black hover:text-pinkish ease-in-out duration-300'>  
          <i className='bx bxs-group ml-2 mr-1'></i> teams
        </Link>
        <Link to={'/account-settings'} className='p-1 uppercase text-left font-semibold rounded-md py-2 justify-center hover:bg-black hover:text-pinkish ease-in-out duration-300'>  
          <i className='bx bxs-cog ml-2 mr-1'></i> account settings
        </Link>
      </div>

      {/* @ SIDENAV BUTTON GROUP */}
      <div className='absolute bottom-8 flex flex-row gap-x-3 items-center'>
        { !user
          ? <span></span>
          : <>
              <div className='w-16 h-16 text-white bg-primary text-center rounded-lg'>
                <p className="mt-4 text-2xl font-semibold">XY</p>
              </div>
              <div className='flex flex-col'>
                <span className='text-white'>{ user ? user.username : '' }</span>
                <span className='text-secondary-dark'>RPX: <span className='text-primary'>{ user ? user.respectPoints : '' }</span></span>
                <div className='flex flex-row gap-x-2'>
                  <span className='text-secondary-dark uppercase'>Rank: </span>
                  { user.games.map(item => item.name === game && 
                    <div key={item.name} className='w-14 flex justify-center'>
                      <span className='text-primary'>{item.rank}</span>
                    </div>)
                  }
                </div>
              </div>
            </>  
        }
      </div>

    </aside>
  )
}


export default Sidebar