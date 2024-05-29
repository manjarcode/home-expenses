import {useState} from 'react'

import {v4 as uuid} from 'uuid'

const emptyDate = {day: null, month: null, year: null}
const emptyGuest = {name: '', period: {from: emptyDate, to: emptyDate}}

export default function ViewModel({guest = emptyGuest, onAccept, onCancel}) {
  const [name, setName] = useState(guest.name)
  const [from, setFrom] = useState(guest.period.from)
  const [to, setTo] = useState(guest.period.to)
  const [active, setActive] = useState(guest.active)

  const handleAccept = () => {
    const id = guest.id || uuid()
    const guestToSave = {id, name, period: {from, to}, active}
    onAccept(guestToSave)
  }

  const handleCancel = () => {
    onCancel()
  }

  return {
    name,
    from,
    to,
    active,
    handleName: setName,
    handleFrom: setFrom,
    handleTo: setTo,
    handleActive: setActive,
    handleAccept,
    handleCancel
  }
}
