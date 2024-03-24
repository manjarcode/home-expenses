'use client'
import {useEffect, useState} from 'react'

import {useParams, useRouter} from 'next/navigation'

import {Box, Typography} from '@mui/material'

import GuestForm from '../../../../components/guests/guestForm/index.js'
import useGuests from '../../../../hooks/useGuests.js'
import routes from '../../../routes.js'

export default function GuestUpdatePage() {
  const {id} = useParams()
  const {get, update} = useGuests()
  const [guest, setGuest] = useState()
  const router = useRouter()

  useEffect(() => {
    if (!id) return

    get(id).then(setGuest)
  }, [get, id])

  const handleAccept = async item => {
    await update(item)
    router.push(routes.home())
  }

  const handleCancel = () => {
    router.push(routes.home())
  }
  return (
    <Box>
      <Typography variant="h2">Editar Inquilino</Typography>

      {guest && <GuestForm onAccept={handleAccept} onCancel={handleCancel} guest={guest} />}
    </Box>
  )
}
