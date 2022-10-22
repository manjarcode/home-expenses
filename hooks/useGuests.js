import {useEffect, useState} from 'react'

import GuestRepository from 'home-expenses-domain/src/guests/repositories/GuestRepository'

const guestRepository = new GuestRepository()

export default function useGuests() {
  const [guests, setGuests] = useState([])

  const addGuest = guest => {
    setGuests(value => [...guests, guest])
    guestRepository.add(guest)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    guestRepository.list().then(entities => {
      setGuests(entities)
    })
  }, [setGuests])

  return {guests, addGuest}
}
