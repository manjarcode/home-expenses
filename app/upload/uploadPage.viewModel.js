import {useState} from 'react'

import {useRouter} from 'next/navigation'

import useExpenses from '../../hooks/useExpenses.js'
import UploadPageModel from './uploadPage.model.js'

const uploadPageModel = new UploadPageModel()

export default function ViewModel() {
  const [expense, setExpense] = useState(null)

  const {add} = useExpenses()
  const router = useRouter()

  const handleFileUpload = file => {
    uploadPageModel.save(file).then(setExpense)
  }

  const handleConfirm = async () => {
    const parsedExpense = uploadPageModel.mapExpenseAmount(expense)
    await add(parsedExpense)
    router.push('/')
  }

  const handleBack = () => {
    router.push('/')
  }

  const handleCancel = () => {
    setExpense(null)
  }

  return {
    expense,
    handleFileUpload,
    handleConfirm,
    handleBack,
    handleCancel
  }
}
