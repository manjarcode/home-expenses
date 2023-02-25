import {useState} from 'react'

import {buildExpense} from 'home-expenses-domain/lib/expenses/entities/factory.js'
import PropTypes from 'prop-types'
import {v4 as uuid} from 'uuid'

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

    const id = uuid()
    // TODO: Pending to pass paid flag
    const paid = false
    const expense = buildExpense(id, name, ammount, paid, from, to)
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
