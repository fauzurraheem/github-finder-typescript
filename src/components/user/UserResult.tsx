import React, { useContext } from 'react'
import { GithubContext } from '../context/github/GithubContext'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import { getUser } from '../../utils'








const UserResult = () => {
  const states = useContext(GithubContext)
  const {state} = states


  if(!state.loading){
    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-col-2'>
            {state.users.map((user:getUser) => (
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
      )
} else{
    return <Spinner />
}
}

export default UserResult