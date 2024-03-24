'use client'
import {useRouter} from 'next/navigation'

import {Box, Typography} from '@mui/material'

import GuestForm from '../../../components/guests/guestForm/index.js'
import useGuests from '../../../hooks/useGuests.js'
import routes from '../../routes.js'

export default function GuestFormPage() {
  const router = useRouter()
  const {add} = useGuests()

  const handleAccept = guest => {
    add(guest)
    router.push(routes.home())
  }

  const onCancelHandler = () => {
    router.push(routes.home())
  }

  return (
    <Box>
      <Typography variant="h2">Añadir Inquilino</Typography>
      <GuestForm onAccept={handleAccept} onCancel={onCancelHandler} />
    </Box>
  )
}
