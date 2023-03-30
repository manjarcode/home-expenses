import {useEffect, useState} from 'react'

import GuestService from '../pages/services/guestService.js'

const guestService = new GuestService()

export default function useGuests() {
  const [guests, setGuests] = useState([])

  const listExpenses = () => {
    guestService
      .list()
      .then(entities => {
        setGuests(entities)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const add = guest => {
    guestService.add(guest).then(listExpenses)
  }

  const remove = id => {
    guestService.remove(id).then(listExpenses)
  }

  useEffect(() => {
    listExpenses()
  }, [])

  return {guests, add, remove}
}
