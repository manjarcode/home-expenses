/* eslint-disable react/prop-types */
import {Box, Button} from '@mui/material'

import ExpenseCard from '../../components/expenses/expenseCard/index.js'
import FileUploader from '../../components/fileUploader/index.js'
import ViewModel from './uploadPage.viewModel.js'

import styles from './uploadPage.module.scss'

export default function UploadInvoice() {
  const viewModel = ViewModel()

  const hasExpenseLoaded = viewModel.expense
  return (
    <Box className={styles.centered}>
      {!hasExpenseLoaded && <UploadFile viewModel={viewModel} />}
      {hasExpenseLoaded && <DisplaySummary viewModel={viewModel} />}
    </Box>
  )
}

function UploadFile({viewModel}) {
  return (
    <>
      <h2>Subir recibo</h2>
      <FileUploader onFileUpload={viewModel.handleFileUpload} />
      <Box className={styles.buttonContainer}>
        <Button variant="outlined" onClick={viewModel.handleBack}>
          Volver
        </Button>
      </Box>
    </>
  )
}

function DisplaySummary({viewModel}) {
  return (
    <Box className={styles.expenseContainer}>
      <ExpenseCard {...viewModel.expense} />
      <Box className={styles.buttonContainer}>
        <Button variant="outlined" onClick={viewModel.handleCancel}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={viewModel.handleConfirm}>
          Confirmar
        </Button>
      </Box>
    </Box>
  )
}
