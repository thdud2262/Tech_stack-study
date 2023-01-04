// 기본 axios사용해 데이터 가져오기

import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3003/superheroes').then(res => {
      setData(res.data)
      setIsLoading(false)
    }).catch(error=>{
      setError(error.message)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (error){
    return <h2>{error}</h2>
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map(hero => {
        return <div>{hero.name}</div>
      })}
    </>
  )
}
