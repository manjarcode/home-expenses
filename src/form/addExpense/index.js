import {useState} from 'react'

import PropTypes from 'prop-types'

import Modal from '../../components/modal/index.js'
import ExpenseEntity from '../../domain/ExpensesEntity.js'
import PeriodValueObject from '../../domain/PeriodValueObject.js'
import AddPeriod from '../addPeriod/index.js'
import Input from '../input/index.js'

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
    <Modal isVisible={isVisible}>
      <h2>Añadir gasto</h2>
      <Input onChange={setName} label="Nombre: " />
      <Input onChange={setAmmount} label="Cantidad: " />
      <AddPeriod label="Desde: " onChange={setFrom} />
      <AddPeriod label="Hasta: " onChange={setTo} />
      <button onClick={onClick}>Aceptar</button>
      <button onClick={onCancel}>Cancelar</button>
    </Modal>
  )
}

AddExpense.propTypes = {
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  isVisible: PropTypes.bool
}

export default AddExpense
