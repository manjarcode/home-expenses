import {useState} from 'react'

import PropTypes from 'prop-types'

import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

import useModal from '../../../hooks/useModal.js'
import ListCard from '../../ListCard/index.js'
import TextAmmount from '../../textAmmount/index.js'
import ExpenseForm from '../expenseForm/index.js'

function Expenses({
  expenses,
  onExpenseAdded,
  onExpenseDeleted,
  onExpenseUpdated
}) {
  const {isVisible, open, close} = useModal()
  const [updatingExpense, setUpdatingExpense] = useState()

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

  return (
    <ListCard>
      <ListCard.Header>
        <ListCard.Title>Gastos</ListCard.Title>
        <ListCard.Action onClick={onShowFormClick}>Añadir</ListCard.Action>
      </ListCard.Header>
      {hasExpenses && (
        <ListCard.List>
          {expenses.map(({id, name, ammount, period, paid}) => (
            <ListCard.Item
              onClick={() => {
                updateExpenseClick({id, name, ammount, period, paid})
              }}
              primary={
                <TextAmmount name={name} ammount={ammount} paid={paid} />
              }
              secondary={period.toString()}
              secondaryAction={
                <IconButton
                  aria-label="delete-guest"
                  onClick={() => onExpenseDeleted(id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            ></ListCard.Item>
          ))}
        </ListCard.List>
      )}
      <ExpenseForm
        onAccept={onSaveExpense}
        onCancel={onCloseForm}
        isVisible={isVisible}
        expense={updatingExpense}
      />
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
