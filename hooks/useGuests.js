import {useEffect, useState} from 'react'

import GuestRepository from 'home-expenses-domain/src/guests/repositories/GuestRepository'

export default function useGuests() {
  const [guests, setGuests] = useState([])

  const addGuest = guest => {
    setGuests(value => [...guests, guest])
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const guestRepository = new GuestRepository()

  useEffect(() => {
    guestRepository.list().then(entities => {
      setGuests(entities)
    })
  }, [setGuests, guestRepository])

  return {guests, addGuest}
}
