import {useCallback, useEffect, useState} from 'react'

import GuestService from '../services/guestService.js'

const guestService = new GuestService()

export default function useGuests() {
  const [guests, setGuests] = useState([])

  const listGuests = () => {
    guestService.list().then(entities => {
      setGuests(entities)
    })
  }

  const add = guest => {
    guestService.add(guest).then(listGuests)
  }

  const get = useCallback(id => guestService.get(id), [])

  const update = guest => {
    guestService.update(guest)
  }

  const remove = id => {
    guestService.remove(id).then(listGuests)
  }

  useEffect(() => {
    listGuests()
  }, [])

  return {guests, add, get, update, remove}
}
