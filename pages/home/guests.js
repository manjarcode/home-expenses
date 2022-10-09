import {useState} from 'react'

import PropTypes from 'prop-types'

import AddGuest from '../../components/addGuest/index.js'
import Button from '../../components/button/index.js'
import Guest from '../../components/guest/index.js'
import useGuests from '../../hooks/useGuests.js'
import useModal from '../../hooks/useModal.js'

function Guests({onChange}) {
  const {guests, setGuests} = useGuests()
  const {isVisible, open, close} = useModal()
  const onAccept = guest => {
    const current = [...guests, guest]
    setGuests(current)
    onChange(current)
    close()
  }

  return (
    <div>
      {guests.map(guest => (
        <Guest {...guest} key={guest.name} />
      ))}
      <Button onClick={open}>Añadir huésped</Button>
      <AddGuest isVisible={isVisible} onAccept={onAccept} onCancel={close} />
    </div>
  )
}

Guests.propTypes = {
  onChange: PropTypes.func
}
export default Guests
