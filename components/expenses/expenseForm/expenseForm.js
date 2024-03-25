'use client'
import {useState} from 'react'

import dayjs from 'dayjs'
import PropTypes from 'prop-types'

import {Box, Button, Checkbox, FormControlLabel} from '@mui/material'
import {DateField} from '@mui/x-date-pickers'

import Input from '../../input/index.js'

const emptyDate = {day: null, month: null, year: null}
const emptyExpense = {
  name: '',
  amount: 0,
  paid: false,
  period: {
    from: emptyDate,
    to: emptyDate
  }
}

export default function ExpenseForm({expense = emptyExpense, onAccept, onCancel}) {
  const [name, setName] = useState(expense.name)
  const [from, setFrom] = useState(expense.period.from)
  const [to, setTo] = useState(expense.period.to)
  const [paid, setPaid] = useState(expense.paid)
  const [amount, setAmount] = useState(expense.amount)

  const acceptHandler = () => {
    const amountFloat = parseFloat(amount)

    const id = expense.id

    onAccept({id, name, amount: amountFloat, paid, period: {from, to, currently: false}})
  }

  return (
    <Box>
      <Box>
        <Input label="Nombre" onChange={setName} value={name} />
      </Box>
      <Box>
        <Input label="Cantidad" onChange={setAmount} value={amount} />
      </Box>
      <Box>
        <DateField label="Desde" format="DD/MM/YYYY" value={dayjs(from)} onChange={setFrom} />
      </Box>
      <Box>
        <DateField label="Hasta" format="DD/MM/YYYY" value={dayjs(to)} onChange={setTo} />
      </Box>
      <Box>
        <FormControlLabel
          control={<Checkbox checked={paid} onChange={e => setPaid(e.target.checked)} />}
          label="Pagado"
        />
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

ExpenseForm.propTypes = {
  expense: PropTypes.object,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
}
