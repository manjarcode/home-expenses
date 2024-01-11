'use client'
import {useState} from 'react'

import {useRouter} from 'next/navigation'

import {Box, Button} from '@mui/material'

import ExpenseCard from '../../components/expenses/expenseCard/index.js'
import FileUploader from '../../components/fileUploader/index.js'
import useExpenses from '../../hooks/useExpenses.js'

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

  const {add} = useExpenses()
  const router = useRouter()
  const onFileUpload = file => {
    send(file).then(setExpense)
  }

  const onConfirm = async () => {
    await add(expense)
    router.push('/')
  }

  return (
    <Box className={styles.centered}>
      <h1>Subir recibo</h1>
      <FileUploader onFileUpload={onFileUpload} />

      {expense && (
        <>
          <Box className={styles.expenseContainer}>
            <ExpenseCard {...expense} />
            <Button variant="contained" onClick={onConfirm}>
              Confirmar
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}
