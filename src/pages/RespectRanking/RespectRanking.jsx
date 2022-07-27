import React from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

const RespectRanking = () => {
  let { game } = useParams()

  return (
    <div className='flex'>
      <Sidebar />
      <div>
        {game}
      </div>
    </div>
  )
}

export default RespectRanking