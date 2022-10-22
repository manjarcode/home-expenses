import PropTypes from 'prop-types'

import AddGuest from '../../components/addGuest/index.js'
import Button from '../../components/button/index.js'
import Guest from '../../components/guest/index.js'
import useModal from '../../hooks/useModal.js'

function Guests({guests, onGuestAdded}) {
  const {isVisible, open, close} = useModal()
  const onAccept = guest => {
    close()
    onGuestAdded(guest)
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
  guests: PropTypes.array,
  onGuestAdded: PropTypes.func
}
export default Guests
