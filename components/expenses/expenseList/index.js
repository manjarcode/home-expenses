import {useState} from 'react'

import PropTypes from 'prop-types'

import DeleteIcon from '@mui/icons-material/Delete'
import {Checkbox, FormControlLabel} from '@mui/material'
import IconButton from '@mui/material/IconButton'

import useModal from '../../../hooks/useModal.js'
import ListCard from '../../ListCard/index.js'
import TextAmmount from '../../textAmmount/index.js'
import ExpenseForm from '../expenseForm/index.js'

function Expenses({expenses, onExpenseAdded, onExpenseDeleted, onExpenseUpdated}) {
  const {isVisible, open, close} = useModal()
  const [updatingExpense, setUpdatingExpense] = useState()
  const [display, setDisplay] = useState(false)

  const expensesDisplayed = display ? expenses : expenses.filter(expense => !expense.paid)

  const onSaveExpense = expense => {
    const isUpdating = Boolean(updatingExpense)
    const action = isUpdating ? onExpenseUpdated : onExpenseAdded

    action(expense)

    close()
    setUpdatingExpense(null)
  }

  const onCloseForm = () => {
    setUpdatingExpense(null)
    close()
  }

  const onShowFormClick = () => {
    open()
  }

  const hasExpenses = Array.isArray(expenses) && expenses.length > 0

  const updateExpenseClick = expense => {
    setUpdatingExpense(expense)
    open()
  }

  const handleToogleHidden = () => {
    setDisplay(display => !display)
  }

  return (
    <ListCard>
      <ListCard.Header>
        <ListCard.Title>Gastos</ListCard.Title>
        <ListCard.Action onClick={onShowFormClick}>Añadir</ListCard.Action>
      </ListCard.Header>
      <ListCard.Toolbar>
        <FormControlLabel
          control={<Checkbox checked={display} onChange={handleToogleHidden} />}
          label="Mostrar ocultos"
        />
      </ListCard.Toolbar>
      {hasExpenses && (
        <ListCard.List>
          {expensesDisplayed.map(expense => {
            const {id, name, ammount, period, paid} = expense
            return (
              <ListCard.Item
                onClick={() => {
                  updateExpenseClick(expense)
                }}
                primary={<TextAmmount name={name} ammount={ammount} paid={paid} />}
                secondary={period.value}
                secondaryAction={
                  <IconButton aria-label="delete-guest" onClick={() => onExpenseDeleted(id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              ></ListCard.Item>
            )
          })}
        </ListCard.List>
      )}
      <ExpenseForm onAccept={onSaveExpense} onCancel={onCloseForm} isVisible={isVisible} expense={updatingExpense} />
    </ListCard>
  )
}

Expenses.propTypes = {
  expenses: PropTypes.array,
  onExpenseAdded: PropTypes.func,
  onExpenseDeleted: PropTypes.func,
  onExpenseUpdated: PropTypes.func
}

export default Expenses
