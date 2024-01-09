'use client'
import {useState} from 'react'

import {Box} from '@mui/material'

import ExpenseCard from '../../components/expenses/expenseCard/index.js'
import FileUploader from '../../components/fileUploader/index.js'

import styles from './page.module.scss'

async function send(file) {
  const data = new FormData()
  data.set('file', file)

  return fetch('/api/upload', {
    method: 'POST',
    body: data
  }).then(response => response.json())
}

export default function UploadInvoice() {
  const [expense, setExpense] = useState(null)

  const onFileUpload = file => {
    send(file).then(setExpense)
  }

  return (
    <Box className={styles.centered}>
      <h1>Subir recibo</h1>
      <FileUploader onFileUpload={onFileUpload} />

      {expense && (
        <>
          <Box className={styles.expenseContainer}>
            <ExpenseCard {...expense} />
          </Box>
        </>
      )}
    </Box>
  )
}
