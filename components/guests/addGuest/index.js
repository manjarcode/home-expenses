import {useState} from 'react'

import PropTypes from 'prop-types'
import {v4 as uuid} from 'uuid'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import AddPeriod from '../../addPeriod/index.js'
import Input from '../../input/index.js'

import styles from './index.module.scss'

function AddGuest({onAccept, onCancel, isVisible}) {
  const [name, setName] = useState()
  const [from, setFrom] = useState()
  const [to, setTo] = useState()

  const acceptHandler = () => {
    const id = uuid()
    onAccept({id, name, from, to})
  }
  return (
    <Dialog open={isVisible}>
      <DialogTitle>Añadir huésped</DialogTitle>
      <DialogContent className={styles.content}>
        <Input label="Nombre" onChange={setName} />
        <AddPeriod label="Desde: " onChange={setFrom} />
        <AddPeriod label="Hasta: " onChange={setTo} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancelar</Button>
        <Button variant="contained" onClick={acceptHandler}>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

AddGuest.propTypes = {
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  isVisible: PropTypes.bool
}

export default AddGuest
