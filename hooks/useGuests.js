import {useEffect, useState} from 'react'

import {useCases} from 'home-expenses-domain'

const {addGuestUseCase, removeGuestUseCase, listGuestUseCase} = useCases

export default function useGuests() {
  const [guests, setGuests] = useState([])

  const add = (id, name, from, to) => {
    const guest = addGuestUseCase.execute(id, name, from, to)
    setGuests(value => [...guests, guest])
  }

  const remove = id => {
    setGuests(value => guests.filter(item => item.id !== id))
    removeGuestUseCase.execute(id)
  }

  useEffect(() => {
    listGuestUseCase.execute().then(entities => {
      setGuests(entities)
    })
  }, [setGuests])

  return {guests, add, remove}
}
