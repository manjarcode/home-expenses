import PropTypes from 'prop-types'

import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'

import AddGuest from '../../../components/addGuest/index.js'
import Guest from '../../../components/guest/index.js'
import useModal from '../../../hooks/useModal.js'

import styles from './index.module.scss'

function Guests({guests, onGuestAdded}) {
  const {isVisible, open, close} = useModal()
  const onAccept = guest => {
    close()
    onGuestAdded(guest)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Huéspedes</h2>
        <Button onClick={open} startIcon={<AddIcon />}>
          Añadir
        </Button>
      </div>
      <div>
        {guests.map(guest => (
          <Guest {...guest} key={guest.name} />
        ))}
        <AddGuest isVisible={isVisible} onAccept={onAccept} onCancel={close} />
      </div>
    </div>
  )
}

Guests.propTypes = {
  guests: PropTypes.array,
  onGuestAdded: PropTypes.func
}
export default Guests
