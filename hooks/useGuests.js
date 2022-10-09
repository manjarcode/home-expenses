import {useEffect, useState} from 'react'

import GuestEntityFactory from 'home-expenses-domain/src/guests/entities/factory'

export default function useGuests() {
  const [guests, setGuests] = useState([])

  useEffect(() => {
    fetch(`/api/guests`)
      .then(response => response.json())
      .then(response => {
        const entities = response.map(data => GuestEntityFactory.guest(data))
        setGuests(entities)
      })
  }, [setGuests])

  return {guests, setGuests}
}
