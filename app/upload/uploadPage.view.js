import {Box, Button} from '@mui/material'

import ExpenseCard from '../../components/expenses/expenseCard/index.js'
import FileUploader from '../../components/fileUploader/index.js'
import ViewModel from './uploadPage.viewModel.js'

import styles from './uploadPage.module.scss'

export default function UploadInvoice() {
  const viewModel = ViewModel()

  return (
    <Box className={styles.centered}>
      <h1>Subir recibo</h1>
      <FileUploader onFileUpload={viewModel.handleFileUpload} />

      {viewModel.expense && (
        <>
          <Box className={styles.expenseContainer}>
            <ExpenseCard {...viewModel.expense} />
            <Button variant="contained" onClick={viewModel.handleConfirm}>
              Confirmar
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}
