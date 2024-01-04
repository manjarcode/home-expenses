import PropTypes from 'prop-types'

import DeleteIcon from '@mui/icons-material/Delete'
import {IconButton} from '@mui/material'

import useModal from '../../../hooks/useModal.js'
import ListCard from '../../ListCard/index.js'
import AddGuest from '../addGuest/index.js'

function GuestList({guests = [], onGuestAdded, onGuestDeleted}) {
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
          {guests.map(({id, name, period}) => (
            <ListCard.Item
              key={id}
              primary={name}
              secondary={period.value}
              secondaryAction={
                <IconButton aria-label="delete-guest" onClick={() => onGuestDeleted(id)}>
                  <DeleteIcon />
                </IconButton>
              }
            />
          ))}
        </ListCard.List>
      )}
      <AddGuest isVisible={isVisible} onAccept={onAccept} onCancel={close} />
    </ListCard>
  )
}

GuestList.propTypes = {
  guests: PropTypes.array,
  onGuestAdded: PropTypes.func,
  onGuestDeleted: PropTypes.func
}

export default GuestList
