import {useEffect, useState} from 'react'

import {buildExpense} from 'home-expenses-domain/lib/expenses/entities/factory.js'
import PropTypes from 'prop-types'
import {v4 as uuid} from 'uuid'

import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControlLabel from '@mui/material/FormControlLabel'

import DateInput from '../../dateInput/index.js'
import Input from '../../input/index.js'

import styles from './index.module.scss'

function ExpenseForm({onAccept, onCancel, isVisible, expense}) {
  const [id, setId] = useState(uuid())
  const [name, setName] = useState()
  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  const [ammount, setAmmount] = useState()
  const [paid, setPaid] = useState()

  useEffect(() => {
    const hasExpense = Boolean(expense)

    setId(hasExpense ? expense.id : uuid())
    setName(hasExpense ? expense.name : null)
    setFrom(hasExpense ? expense.period.from : null)
    setTo(hasExpense ? expense.period.to : null)
    setAmmount(hasExpense ? expense.ammount : null)
    setPaid(hasExpense ? expense.paid : false)
  }, [expense, isVisible])

  const onClick = () => {
    // TODO: Validar datos
    const expense = buildExpense(id, name, ammount, paid, from, to)
    onAccept(expense)
  }

  return (
    <Dialog open={isVisible}>
      <DialogTitle>Añadir gasto</DialogTitle>
      <DialogContent className={styles.content}>
        <Input label="Nombre:" onChange={setName} value={name} />
        <Input label="Cantidad:" onChange={setAmmount} value={ammount} />
        <DateInput label="Desde:" onChange={setFrom} value={from} />
        <DateInput label="Hasta:" onChange={setTo} value={to} />
        <FormControlLabel
          control={
            <Checkbox
              onChange={() => setPaid(value => !value)}
              checked={paid}
            />
          }
          label="Pagado"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancelar</Button>
        <Button variant="contained" onClick={onClick}>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

ExpenseForm.propTypes = {
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  isVisible: PropTypes.bool,
  expense: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    ammount: PropTypes.number,
    paid: PropTypes.bool,
    period: PropTypes.shape({
      from: PropTypes.string,
      to: PropTypes.string
    })
  })
}

export default ExpenseForm
