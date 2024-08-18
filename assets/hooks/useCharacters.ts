import {useEffect, useState} from 'react'
import axios from 'axios'
import {Nullable} from '@/assets/types'

export const useCharacters = (): Nullable<CharacterType[]> => {
  const [characters, setCharacters] = useState<Nullable<CharacterType[]>>(null)

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character`)
      .then(res => setCharacters(res.data.results))
  }, [])

  return characters
}

//types

export type CharacterType = {
  id: number
  name: string
  image: string
  status: string
  species: string
  gender: string
  location: {
    name: string
  }
}