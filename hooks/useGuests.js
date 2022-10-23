import {useEffect, useState} from 'react'

import GuestRepository from 'home-expenses-domain/src/guests/repositories/GuestRepository'

const guestRepository = new GuestRepository()

export default function useGuests() {
  const [guests, setGuests] = useState([])

  const add = guest => {
    setGuests(value => [...guests, guest])
    guestRepository.add(guest)
  }

  const remove = id => {
    setGuests(value => guests.filter(item => item.id !== id))
    guestRepository.delete(id)
  }

  useEffect(() => {
    guestRepository.list().then(entities => {
      setGuests(entities)
    })
  }, [setGuests])

  return {guests, add, remove}
}
