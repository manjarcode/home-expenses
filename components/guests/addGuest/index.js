import {useState} from 'react'

import GuestEntity from 'home-expenses-domain/src/guests/entities/GuestEntity.js'
import PeriodValueObject from 'home-expenses-domain/src/periods/valueObjects/PeriodValueObject.js'
import PropTypes from 'prop-types'
import {v4 as uuid} from 'uuid'

import Button from '@mui/material/Button'

import AddPeriod from '../../addPeriod/index.js'
import Input from '../../input/index.js'
import Modal from '../../modal/index.js'

function AddGuest({onAccept, onCancel, isVisible}) {
  const [name, setName] = useState()
  const [from, setFrom] = useState()
  const [to, setTo] = useState()

  const acceptHandler = () => {
    const period = new PeriodValueObject({from, to})
    const guest = new GuestEntity({id: uuid(), name, period})

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
