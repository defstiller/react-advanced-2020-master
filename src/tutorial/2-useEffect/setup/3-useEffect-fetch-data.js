import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async() => {
    const response = await fetch(url)
    const newUsers = await response.json()
    console.log(newUsers)
    setUsers(newUsers)
  }
  useEffect(() => {
    getUsers()
  }, []) 
  return <>
    <h3>Git Users</h3>
    <ul className='users'>
    {users.map((user) => {
      const {id,login,avatar_url, html_url} = user
      return <li key={id}>
        <img src={avatar_url} alt={login} />
        <div>
          <h4>{login}</h4>
          <a href={html_url}>profile</a>
        </div>
      </li>
    })}
    </ul>
    <button onClick={getUsers}>Get users</button>
  </>
};

export default UseEffectFetchData;
