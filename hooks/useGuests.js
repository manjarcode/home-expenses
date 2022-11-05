import {useEffect, useState} from 'react'

import {useCases} from 'home-expenses-domain'

const {addGuestUseCase, removeGuestUseCase, listGuestUseCase} = useCases

console.log('useCases', useCases)
export default function useGuests() {
  const [guests, setGuests] = useState([])

  const add = dto => {
    const guest = addGuestUseCase.execute(dto)
    setGuests(value => [...guests, guest])
  }

  const remove = id => {
    setGuests(value => guests.filter(item => item.id !== id))
    removeGuestUseCase.execute({id})
  }

  useEffect(() => {
    listGuestUseCase.execute().then(entities => {
      setGuests(entities)
    })
  }, [setGuests])

  return {guests, add, remove}
}
