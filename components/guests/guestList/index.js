import PropTypes from 'prop-types'

import useModal from '../../../hooks/useModal.js'
import ListCard from '../../ListCard/index.js'
import AddGuest from '../addGuest/index.js'

function GuestList({guests = [], onGuestAdded}) {
  const {isVisible, open, close} = useModal()
  const onAccept = guest => {
    close()
    onGuestAdded(guest)
  }

  const hasGuests = Array.isArray(guests) && guests.length > 0

  return (
    <ListCard>
      <ListCard.Header>
        <ListCard.Title>Huéspedes</ListCard.Title>
        <ListCard.Action onClick={open}>Añadir</ListCard.Action>
      </ListCard.Header>
      {hasGuests && (
        <ListCard.List>
          {guests.map(({name, period}) => (
            <ListCard.Item primary={name} secondary={period.toString()} />
          ))}
        </ListCard.List>
      )}
      <AddGuest isVisible={isVisible} onAccept={onAccept} onCancel={close} />
    </ListCard>
  )
}

GuestList.propTypes = {
  guests: PropTypes.array,
  onGuestAdded: PropTypes.func
}
export default GuestList
