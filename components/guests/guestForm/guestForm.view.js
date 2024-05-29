import dayjs from 'dayjs'
import PropTypes from 'prop-types'

import {Box} from '@mui/material'
import Button from '@mui/material/Button'
import {DateField} from '@mui/x-date-pickers'

import Checkbox from '../../form/checkbox/checkbox.js'
import Input from '../../form/input/input.js'
import FormRow, {gapSizes} from '../../layout/formRow/formRow.js'
import MarginBox from '../../layout/marginBox/marginBox.js'
import ViewModel from './guestForm.viewModel.js'

export default function GuestForm({guest, onAccept, onCancel}) {
  const viewModel = ViewModel({guest, onAccept, onCancel})

  return (
    <Box>
      <FormRow>
        <MarginBox>
          <Input label="Nombre" onChange={viewModel.handleName} value={viewModel.name} />
        </MarginBox>
      </FormRow>
      <FormRow>
        <MarginBox>
          <DateField label="Desde" format="DD/MM/YYYY" value={dayjs(viewModel.from)} onChange={viewModel.handleFrom} />
        </MarginBox>
        <MarginBox>
          <DateField label="Hasta" format="DD/MM/YYYY" value={dayjs(viewModel.to)} onChange={viewModel.handleTo} />
        </MarginBox>
      </FormRow>
      <MarginBox>
        <Checkbox label="Activo" value={viewModel.active} onChange={viewModel.handleActive} />
      </MarginBox>
      <MarginBox>
        <FormRow isCentered gapSize={gapSizes.l}>
          <Button variant="contained" onClick={viewModel.handleAccept}>
            Aceptar
          </Button>
          <Button onClick={viewModel.handleCandel}>Cancelar</Button>
        </FormRow>
      </MarginBox>
    </Box>
  )
}

GuestForm.propTypes = {
  guest: PropTypes.object,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func
}
