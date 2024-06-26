'use client'
import {useRouter} from 'next/navigation'

import {Box} from '@mui/material'

import GuestForm from '../../../components/guests/guestForm/guestForm.js'
import PageTitle from '../../../components/layout/pageTitle/pageTitle.js'
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
      <PageTitle>Nuevo inquilino</PageTitle>
      <GuestForm onAccept={handleAccept} onCancel={onCancelHandler} />
    </Box>
  )
}
