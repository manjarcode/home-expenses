import {Box} from '@mui/material'

import GuestForm from '../../../../components/guests/guestForm/guestForm.js'
import PageTitle from '../../../../components/layout/pageTitle/pageTitle.js'
import ViewModel from './GuestEditPage.viewModel.js'

export default function GuestEditPage() {
  const viewModel = ViewModel()

  return (
    <Box>
      <PageTitle>Editar inquilino</PageTitle>
      {viewModel.guest && (
        <GuestForm onAccept={viewModel.handleAccept} onCancel={viewModel.handleCancel} guest={viewModel.guest} />
      )}
    </Box>
  )
}
