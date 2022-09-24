import {useState} from 'react'

import PropTypes from 'prop-types'

import Modal from '../../components/modal/index.js'
import GuestEntity from '../../domain/GuestEntity.js'
import PeriodValueObject from '../../domain/PeriodValueObject.js'
import AddPeriod from '../addPeriod/index.js'
import Input from '../input/index.js'

function AddGuest({onAccept, onCancel, isVisible}) {
  const [name, setName] = useState()
  const [from, setFrom] = useState()
  const [to, setTo] = useState()

  const acceptHandler = () => {
    const period = new PeriodValueObject({from, to})
    const guest = new GuestEntity({name, period})

    onAccept(guest)
  }
  return (
    <Modal isVisible={isVisible}>
      <h2>Añadir huésped</h2>
      <Input label="Nombre" onChange={setName} />
      <AddPeriod label="Desde: " onChange={setFrom} />
      <AddPeriod label="Hasta: " onChange={setTo} />
      <button onClick={acceptHandler}>Aceptar</button>
      <button onClick={onCancel}>Cancelar</button>
    </Modal>
  )
}

AddGuest.propTypes = {
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  isVisible: PropTypes.bool
}

export default AddGuest
