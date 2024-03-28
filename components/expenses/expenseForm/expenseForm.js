'use client'
import {useState} from 'react'

import dayjs from 'dayjs'
import PropTypes from 'prop-types'

import {Box, Button, Checkbox, FormControlLabel} from '@mui/material'
import {DateField} from '@mui/x-date-pickers'

import Input from '../../input/index.js'
import FormRow, {gapSizes} from '../../layout/formRow/formRow.js'
import MarginBox from '../../layout/marginBox/marginBox.js'
import {parseAmount} from '../../utils.js'

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
    const amountFloat = parseAmount(amount)
    const id = expense.id

    onAccept({id, name, amount: amountFloat, paid, period: {from, to, currently: false}})
  }

  return (
    <Box>
      <FormRow>
        <MarginBox>
          <Input label="Nombre" onChange={setName} value={name} />
        </MarginBox>
        <MarginBox>
          <Input label="Cantidad" onChange={setAmount} value={amount} />
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
        <FormControlLabel
          control={<Checkbox checked={paid} onChange={e => setPaid(e.target.checked)} />}
          label="Pagado"
        />
      </MarginBox>
      <FormRow isCentered={true} gapSize={gapSizes.l}>
        <Button variant="contained" onClick={acceptHandler}>
          Aceptar
        </Button>
        <Button onClick={onCancel}>Cancelar</Button>
      </FormRow>
    </Box>
  )
}

ExpenseForm.propTypes = {
  expense: PropTypes.object,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
}
