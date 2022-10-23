import {useState} from 'react'

import ExpenseEntity from 'home-expenses-domain/src/expenses/entities/ExpensesEntity.js'
import PeriodValueObject from 'home-expenses-domain/src/periods/valueObjects/PeriodValueObject.js'
import PropTypes from 'prop-types'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import AddPeriod from '../../addPeriod/index.js'
import Input from '../../input/index.js'

import styles from './index.module.scss'

function AddExpense({onAccept, onCancel, isVisible}) {
  const [name, setName] = useState()
  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  const [ammount, setAmmount] = useState()

  const onClick = () => {
    // TODO: Validar datos

    const period = new PeriodValueObject({name, from, to})
    const expense = new ExpenseEntity({name, period, ammount})
    onAccept(expense)
  }

  return (
    <Dialog open={isVisible}>
      <DialogTitle>Añadir gasto</DialogTitle>
      <DialogContent className={styles.content}>
        <Input onChange={setName} label="Nombre: " />
        <Input onChange={setAmmount} label="Cantidad: " />
        <AddPeriod label="Desde: " onChange={setFrom} />
        <AddPeriod label="Hasta: " onChange={setTo} />
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

AddExpense.propTypes = {
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  isVisible: PropTypes.bool
}

export default AddExpense
