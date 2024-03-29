import {useState} from 'react'

import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import {v4 as uuid} from 'uuid'

import {Box} from '@mui/material'
import Button from '@mui/material/Button'
import {DateField} from '@mui/x-date-pickers'

import Input from '../../input/index.js'

const emptyDate = {day: null, month: null, year: null}
const emptyGuest = {name: '', period: {from: emptyDate, to: emptyDate}}

export default function GuestForm({guest = emptyGuest, onAccept, onCancel}) {
  const [name, setName] = useState(guest.name)
  const [from, setFrom] = useState(guest.period.from)
  const [to, setTo] = useState(guest.period.to)

  const acceptHandler = () => {
    const id = guest.id || uuid()
    const guestToSave = {id, name, period: {from, to, currently: true}}
    onAccept(guestToSave)
  }

  return (
    <Box>
      <Input label="Nombre" onChange={setName} value={name} />
      <Box>
        <DateField label="Desde" format="DD/MM/YYYY" value={dayjs(from)} onChange={setFrom} />
      </Box>
      <Box>
        <DateField label="Hasta" format="DD/MM/YYYY" value={dayjs(to)} onChange={setTo} />
      </Box>
      <Box>
        <Button onClick={onCancel}>Cancelar</Button>
        <Button variant="contained" onClick={acceptHandler}>
          Aceptar
        </Button>
      </Box>
    </Box>
  )
}

GuestForm.propTypes = {
  guest: PropTypes.object,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
}
