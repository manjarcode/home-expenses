import {useEffect, useReducer, useState} from 'react'

import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import {v4 as uuid} from 'uuid'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControlLabel from '@mui/material/FormControlLabel'
import {DateField} from '@mui/x-date-pickers'

import Input from '../../input/index.js'

import styles from './index.module.scss'

const emptyDate = () => ({
  day: '',
  month: '',
  year: ''
})

const emptyExpense = () => ({
  id: uuid(),
  name: '',
  ammount: 0,
  paid: false,
  period: {
    from: emptyDate(),
    to: emptyDate()
  }
})

function ExpenseForm({onAccept, onCancel, isVisible, expense}) {
  const reducer = (state, action) => {
    return {...state, ...action}
  }

  const [state, dispatch] = useReducer(reducer, expense ?? emptyExpense())

  const [from, setFrom] = useState(expense?.period?.from)
  const [to, setTo] = useState(expense?.period?.to)

  useEffect(() => {
    dispatch(expense)
    setFrom(expense?.period?.from)
    setTo(expense?.period?.to)
  }, [expense, isVisible])

  const handleAccept = () => {
    // TODO: Validar datos

    const expense = {
      ...state,
      period: {from, to}
    }
    onAccept(expense)
  }
  const curryDispatch = key => value => {
    dispatch({[key]: value})
  }
  return (
    <Dialog open={isVisible}>
      <DialogTitle>Añadir gasto</DialogTitle>
      <DialogContent className={styles.content}>
        <Box className={styles.box}>
          <Input label="Nombre:" onChange={curryDispatch('name')} value={state.name} />
        </Box>
        <Box className={styles.box}>
          <Input label="Cantidad:" onChange={curryDispatch('ammount')} value={state.ammount} />
        </Box>
        <Box className={styles.box}>
          <DateField label="Desde:" format="DD/MM/YYYY" value={dayjs(from)} onChange={setFrom} />
        </Box>
        <Box className={styles.box}>
          <DateField label="Hasta:" format="DD/MM/YYYY" value={dayjs(to)} onChange={setTo} />
        </Box>
        <FormControlLabel
          control={
            <Checkbox
              onChange={value => {
                curryDispatch('paid')(value.target.checked)
              }}
              checked={state.paid}
            />
          }
          label="Pagado"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancelar</Button>
        <Button variant="contained" onClick={handleAccept}>
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
