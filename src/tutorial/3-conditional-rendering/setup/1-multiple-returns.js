import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user,setUser] = useState('default user')

  async function getUser() {
    const response = await fetch(url)
    if(response.status >= 200 && response.status <=299) {
      const newUser = await response.json()
      setUser(newUser.login)
    } else {
      setIsError(true)
      console.log(response.status) 
    }
    
    setLoading(false)
  }

  useEffect(() =>{
    getUser()
  },[])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>Error...</h2>
  }
    return <h2>{user}</h2>;

};

export default MultipleReturns;
