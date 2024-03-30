import {useRouter} from 'next/navigation'
import PropTypes from 'prop-types'

import DeleteIcon from '@mui/icons-material/Delete'
import {IconButton} from '@mui/material'

import routes from '../../../app/routes.js'
import ListCard from '../../layout/listCard/listCard.js'
import ListCardResponsive from '../../layout/listCardResponsive/listCardResponsive.js'
import {formatPeriod} from '../../utils.js'

function GuestList({guests = [], onGuestDeleted}) {
  const router = useRouter()

  const hasGuests = Array.isArray(guests) && guests.length > 0

  const handleAddGuest = () => {
    router.push(routes.guest.add())
  }

  const handleGuestSelected = guest => {
    router.push(routes.guest.edit(guest.id))
  }

  return (
    <ListCardResponsive title="Huéspedes" action="Añadir" onAction={handleAddGuest}>
      {hasGuests && (
        <ListCardResponsive.List>
          {guests.map(guest => (
            <GuestListItem
              {...guest}
              onDelete={() => onGuestDeleted(guest.id)}
              onClick={() => handleGuestSelected(guest)}
            ></GuestListItem>
          ))}
        </ListCardResponsive.List>
      )}
    </ListCardResponsive>
  )
}

function GuestListItem({id, name, period, onClick, onDelete}) {
  const formattedPeriod = formatPeriod(period)
  return (
    <ListCard.Item
      onClick={onClick}
      key={id}
      primary={name}
      secondary={formattedPeriod}
      secondaryAction={
        <IconButton aria-label="delete-guest" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      }
    />
  )
}

GuestList.propTypes = {
  guests: PropTypes.array,
  onGuestAdded: PropTypes.func,
  onGuestDeleted: PropTypes.func
}

GuestListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  period: PropTypes.object,
  onClick: PropTypes.func,
  onDelete: PropTypes.func
}

export default GuestList
