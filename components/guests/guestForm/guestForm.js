import {useState} from 'react'

import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import {v4 as uuid} from 'uuid'

import {Box} from '@mui/material'
import Button from '@mui/material/Button'
import {DateField} from '@mui/x-date-pickers'

import Checkbox from '../../form/checkbox/checkbox.js'
import Input from '../../input/index.js'
import FormRow, {gapSizes} from '../../layout/formRow/formRow.js'
import MarginBox from '../../layout/marginBox/marginBox.js'

const emptyDate = {day: null, month: null, year: null}
const emptyGuest = {name: '', period: {from: emptyDate, to: emptyDate}}

export default function GuestForm({guest = emptyGuest, onAccept, onCancel}) {
  const [name, setName] = useState(guest.name)
  const [from, setFrom] = useState(guest.period.from)
  const [to, setTo] = useState(guest.period.to)
  const [active, setActive] = useState(guest.active)

  const acceptHandler = () => {
    const id = guest.id || uuid()
    const guestToSave = {id, name, period: {from, to}, active}
    onAccept(guestToSave)
  }

  return (
    <Box>
      <FormRow>
        <MarginBox>
          <Input label="Nombre" onChange={setName} value={name} />
        </MarginBox>
      </FormRow>
      <FormRow>
        <MarginBox>
          <DateField label="Desde" format="DD/MM/YYYY" value={dayjs(from)} onChange={setFrom} />
        </MarginBox>
        <MarginBox>
          <DateField label="Hasta" format="DD/MM/YYYY" value={dayjs(to)} onChange={setTo} />
        </MarginBox>
      </FormRow>
      <MarginBox>
        <Checkbox label="Activo" value={active} onChange={setActive} />
      </MarginBox>
      <MarginBox>
        <FormRow isCentered gapSize={gapSizes.l}>
          <Button variant="contained" onClick={acceptHandler}>
            Aceptar
          </Button>
          <Button onClick={onCancel}>Cancelar</Button>
        </FormRow>
      </MarginBox>
    </Box>
  )
}

GuestForm.propTypes = {
  guest: PropTypes.object,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
}
