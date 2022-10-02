import {useState} from 'react'

import PropTypes from 'prop-types'

import Modal from '../../components/modal/index.js'
import GuestEntity from '../../domain/GuestEntity.js'
import PeriodValueObject from '../../domain/PeriodValueObject.js'
import AddPeriod from '../addPeriod/index.js'
import Button from '../button/index.js'
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
      <Modal.Title>Añadir huésped</Modal.Title>
      <Input label="Nombre" onChange={setName} />
      <AddPeriod label="Desde: " onChange={setFrom} />
      <AddPeriod label="Hasta: " onChange={setTo} />
      <Modal.Footer>
        <Button onClick={acceptHandler}>Aceptar</Button>
        <Button onClick={onCancel}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  )
}

AddGuest.propTypes = {
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  isVisible: PropTypes.bool
}

export default AddGuest
